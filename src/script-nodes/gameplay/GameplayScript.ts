
// You can write more code here

/* START OF COMPILED CODE */

import { ScriptNode } from "@phaserjs/editor-scripts-core";
import Phaser from "phaser";
import { OnEventScript } from "@phaserjs/editor-scripts-core";
import { CallbackActionScript } from "@phaserjs/editor-scripts-core";
/* START-USER-IMPORTS */
import Star from "../../prefabs/Star";
import { GameSounds } from "../../GameSounds";
import TextureInfoScript from "./TextureInfoScript";
import GameoverPrefab from "../../prefabs/GameoverPrefab";
import Papa from 'papaparse';
/* END-USER-IMPORTS */

export default class GameplayScript extends ScriptNode {

	constructor(parent: ScriptNode | Phaser.GameObjects.GameObject | Phaser.Scene) {
		super(parent);

		// textures
		const textures = new ScriptNode(this);

		// onGamePaused
		const onGamePaused = new OnEventScript(this);

		// callTogglePause
		const callTogglePause = new CallbackActionScript(onGamePaused);

		// onGamePaused (prefab fields)
		onGamePaused.eventName = "game-paused";
		onGamePaused.eventEmitter = "scene.events";

		// callTogglePause (prefab fields)
		callTogglePause.callback = () => this.togglePause();

		this.textures = textures;

		/* START-USER-CTR-CODE */

		this.scene.time.paused = false;
		this.scene.physics.world.isPaused = false;

		/* END-USER-CTR-CODE */
	}

	public textures: ScriptNode;

	/* START-USER-CODE */

	private _baseGravity = 50;
	private _maxSpawnDelay = 2000;
	private _points = 0;
	private card_sequence = 0;
	private _gameOver = false;



	private fetched_data: any = [];
	private decision_cards: any = [];
	private defeat_cards: any = {};
	private victory_cards: any = {};

	private decision_title = "";
	private decision_text = "";
	private decision_option_A_label = "";
	private decision_option_B_label = "";
	private decision_option_A_text = "";
	private decision_option_B_text = "";

	private health = 0.0;
	private money = 0.0;
	private influence_environmentalists = 0.0;
	private influence_militia = 0.0;
	private influence_crypto = 0.0;
	private influence_state = 0.0;

	private option_A_health = 0.0;
	private option_A_money = 0.0;
	private option_A_influence_environmentalists = 0.0;
	private option_A_influence_militia = 0.0;
	private option_A_influence_crypto = 0.0;
	private option_A_influence_state = 0.0;

	private option_B_health = 0.0;
	private option_B_money = 0.0;
	private option_B_influence_environmentalists = -0.0;
	private option_B_influence_militia = 0.0;
	private option_B_influence_crypto = 0.0;
	private option_B_influence_state = 0.0;
	private card_type = "";



	private togglePause() {

		this.setPaused(!this.isPaused());
	}

	private isPaused() {

		return this.scene.time.paused;
	}

	private setPaused(paused: boolean) {

		this.scene.time.paused = paused;
		this.scene.physics.world.isPaused = paused;
	}

	protected override awake(): void {

		this.fetchCards();

		this.scene.time.addEvent({
			delay: 2000,
			callback: () => {
				this.scene.events.addListener('drawCard', this.drawCard, this)
				this.scene.events.addListener('reset', this.reset, this)
				this.scene.events.addListener('selectA', this.select_option_A, this)
				this.scene.events.addListener('selectB', this.select_option_B, this)
				this.scene.time.addEvent({
					delay: 100,
					callback: () => this.drawCard()
				});
			}
		})

		//this.spawnStar();

		//this.nextDifficultyLevel();
	}

	private reset() {
		this.decision_title = "";
		this.decision_text = "";
		this.decision_option_A_label = "";
		this.decision_option_B_label = "";
		this.decision_option_A_text = "";
		this.decision_option_B_text = "";

		this.card_sequence = 0;

		this.health = 0.0;
		this.money = 0.0;
		this.influence_environmentalists = 0.0;
		this.influence_militia = 0.0;
		this.influence_crypto = 0.0;
		this.influence_state = 0.0;

		this.option_A_health = 0.0;
		this.option_A_money = 0.0;
		this.option_A_influence_environmentalists = 0.0;
		this.option_A_influence_militia = 0.0;
		this.option_A_influence_crypto = 0.0;
		this.option_A_influence_state = 0.0;

		this.option_B_health = 0.0;
		this.option_B_money = 0.0;
		this.option_B_influence_environmentalists = -0.0;
		this.option_B_influence_militia = 0.0;
		this.option_B_influence_crypto = 0.0;
		this.option_B_influence_state = 0.0;

		this.drawCard();
	}

	private async fetchCards() {

		var handleResponse = (csvText: string) => {
			let sheetObjects = Papa.parse(csvText,
				{
					header: true, skipEmptyLines: true,
					dynamicTyping: true,
					complete: results => {
						console.log(results);
						this.fetched_data = results.data;
						this.decision_cards = this.fetched_data.filter((card: any) => card.type == 'decision')

						this.defeat_cards = this.fetched_data.filter((card: any) => card.type == 'defeat')

						this.defeat_cards = this.defeat_cards.reduce(function(map: any, obj: any) {
							map[obj.slug] = obj;
							return map;
						}, {});

						this.victory_cards = this.fetched_data.filter((card: any) => card.type == 'victory')

						this.victory_cards = this.victory_cards.reduce(function(map: any, obj: any) {
							map[obj.slug] = obj;
							return map;
						}, {});

						console.log(this.decision_cards)
						console.log(this.defeat_cards)
						console.log(this.victory_cards)
					}
				});
		};

		var csvToObjects = (csv: string) => {
			const csvRows = csv.split("\n");
			const propertyNames = csvSplit(csvRows[0]);
			let objects = [];
			for (let i = 1, max = csvRows.length; i < max; i++) {
				let thisObject: any = {};
				let row = csvSplit(csvRows[i]);
				for (let j = 0, max = row.length; j < max; j++) {
					thisObject[propertyNames[j]] = row[j];
					// BELOW 4 LINES WILL CONVERT DATES IN THE "ENROLLED" COLUMN TO JS DATE OBJECTS
					// if (propertyNames[j] === "Enrolled") {
					//   thisObject[propertyNames[j]] = new Date(row[j]);
					// } else {
					//   thisObject[propertyNames[j]] = row[j];
					// }
				}
				objects.push(thisObject);
			}
			return objects;
		};

		function csvSplit(row: string) {
			return row.split(",").map((val) => val.substring(1, val.length - 1));
		}

		// sheetID you can find in the URL of your spreadsheet after "spreadsheet/d/"
		const sheetId = "19PHWwxOLoETByfDJ4b959u62JKQYsBjcU4FN2LoSwjI";
		// sheetName is the name of the TAB in your spreadsheet
		const sheetName = encodeURIComponent("Sheet1");
		const sheetURL = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?tqx=out:csv&sheet=${sheetName}`;



		return await fetch(sheetURL)
			.then((response) => response.text())
			.then((csvText) => handleResponse(csvText));

	}

	private select_option_A() {

		if (this.card_type == "decision") {
			GameSounds.playDecision();
			this.health += this.option_A_health;
			this.money += this.option_A_money;
			this.influence_environmentalists += this.option_A_influence_environmentalists;
			this.influence_crypto += this.option_A_influence_crypto;
			this.influence_militia += this.option_A_influence_militia;
			this.influence_state += this.option_A_influence_militia;
			this.scene.events.emit("update-card-text", this.decision_option_A_text);
			this.scene.events.emit("selectOption", true);
			// this.scene.time.addEvent({
			// 	delay: 4000,
			// 	callback: () => this.drawCard()
			// });
		}
		else if (this.card_type == 'defeat') {
			GameSounds.playEventBad();
			//this.reset()
		}
	}

	private select_option_B() {

		if (this.card_type == "decision") {
			GameSounds.playDecision();
			this.health += this.option_B_health;
			this.money += this.option_B_money;
			this.influence_environmentalists += this.option_B_influence_environmentalists;
			this.influence_crypto += this.option_B_influence_crypto;
			this.influence_militia += this.option_B_influence_militia;
			this.influence_state += this.option_B_influence_militia;
			this.scene.events.emit("update-card-text", this.decision_option_B_text);
			this.scene.events.emit("selectOption", true);
			// this.scene.time.addEvent({
			// 	delay: 2500,
			// 	callback: () => this.drawCard()
			// });
		}
		else if (this.card_type == 'defeat') {
			GameSounds.playEventBad();
			this.reset()
		}
	}

	private drawCard() {


		console.log(this.fetched_data)
		console.log(this.card_sequence > this.fetched_data.length)

		if (this.money < 0) {
			var card = this.victory_cards["defeat-money"]
		}
		else if (this.health < 0) {
			var card = this.defeat_cards["defeat-health"]
		}
		else if (this.health >= 100) {
			var card = this.victory_cards["victory-health"]
		}
		else if (this.money >= 1000) {
			var card = this.victory_cards["victory-money"]
		}
		else if (this.influence_environmentalists > 3) {
			var card = this.victory_cards["victory-environmentalists"]
		}
		else if (this.influence_environmentalists < -3) {
			var card = this.defeat_cards["defeat-environmentalists"]
			
		}
		else if (this.influence_crypto > 3) {
			var card = this.victory_cards["victory-crypto"]
		}
		else if (this.influence_crypto < -3) {
			var card = this.defeat_cards["defeat-crypto"]
			
		}
		else if (this.influence_militia > 3) {
			var card = this.victory_cards["victory-militia"]
		}
		else if (this.influence_militia < -3) {
			var card = this.defeat_cards["defeat-militia"]
		}
		else if (this.influence_state > 3) {
			var card = this.victory_cards["victory-state"]
		}
		else if (this.influence_state < -3) {
			var card = this.defeat_cards["defeat-state"]
		}
		else {
			var card = this.decision_cards[this.card_sequence];
		}





		if (this.card_sequence < this.decision_cards.length) {
			
			console.log(card)
			this.decision_title = card.decision_title;
			this.decision_text = card.decision_text;
			this.decision_option_A_label = card.option_A_label;
			this.decision_option_B_label = card.option_B_label;

			this.decision_option_A_text = card.option_A_outcome;
			this.decision_option_B_text = card.option_B_outcome;

			this.option_A_health = card.option_A_health;
			this.option_A_money = card.option_A_money;
			this.option_A_influence_environmentalists = card.option_A_influence_environmentalists;
			this.option_A_influence_crypto = card.option_A_influence_crypto;
			this.option_A_influence_militia = card.option_A_influence_militia
			this.option_A_influence_state = card.option_A_influence_state

			this.option_B_health = card.option_B_health;
			this.option_B_money = card.option_B_money;
			this.option_B_influence_environmentalists = card.option_B_influence_environmentalists;
			this.option_B_influence_crypto = card.option_B_influence_crypto;
			this.option_B_influence_militia = card.option_B_influence_militia
			this.option_B_influence_state = card.option_B_influence_state


			this.scene.events.emit("update-card-title", this.decision_title);
			this.scene.events.emit("update-card-text", this.decision_text);
			this.scene.events.emit("update-card-option-A-label", this.decision_option_A_label);
			this.scene.events.emit("update-card-option-B-label", this.decision_option_B_label);
			this.scene.events.emit("update-points", this.card_sequence);

			this.scene.events.emit("update-health", this.health);
			this.scene.events.emit("update-money", this.money);
			this.scene.events.emit("update-inf-env", this.influence_environmentalists);
			this.scene.events.emit("update-inf-crypto", this.influence_crypto);
			this.scene.events.emit("update-inf-militia", this.influence_militia);
			this.scene.events.emit("update-inf-est", this.influence_state);

			this.card_sequence++;
			this.card_type = card.type;
			this.scene.events.emit("between", false)
		}
		else {
			this.scene.events.emit("between", true)
		}


		if (this.card_type == "defeat") {
			this.scene.events.emit("defeat", true)
		}
		else if (this.card_type == "victory"){
			this.scene.events.emit("victory", true)
		}
		else {
			this.scene.events.emit("defeat", false)
			this.scene.events.emit("false", true)
		}
	}

	private endGame() {
		this.scene.events.emit("update-card-title", this.decision_title);
		this.scene.events.emit("update-card-text", this.decision_text);
		this.scene.events.emit("update-card-option-A-label", this.decision_option_A_label);
		this.scene.events.emit("update-card-option-B-label", this.decision_option_B_label);
	}

	private nextDifficultyLevel() {

		if (this._gameOver) {

			return;
		}

		this._baseGravity += 50;
		this._maxSpawnDelay = Math.max(this._maxSpawnDelay - 100, 0);

		this.scene.time.addEvent({
			delay: 2000,
			callback: () => this.nextDifficultyLevel()
		});
	}


	private spawnStar() {

		if (this._gameOver) {

			return;
		}

		const scene = this.scene;

		const { texture } = Phaser.Utils.Array.GetRandom(this.textures.children) as TextureInfoScript;

		const star = new Star(scene, 0, 0, texture.key, texture.frame);

		// set position
		const margin = 50;

		const minX = star.width / 2 + margin;
		const maxX = scene.scale.width - star.width / 2 - margin;

		star.setPosition(
			Phaser.Math.Between(minX, maxX),
			scene.scale.height + star.height / 2
		);

		// set velocity
		star.body.velocity.y = -Phaser.Math.Between(this._baseGravity, this._baseGravity + 200);
		star.body.angularVelocity = star.body.velocity.y / 2 * (Math.random() < 0.5 ? -1 : 1);

		// listen pointer
		star.once("pointerdown", () => this.pickStar(star), this);

		// add the star
		scene.add.existing(star);

		// program the next spawn event
		scene.time.addEvent({
			delay: Phaser.Math.Between(100, this._maxSpawnDelay),
			callback: this.spawnStar,
			callbackScope: this
		});
	}

	private killStar(star: Star) {

		star.destroy();
	}

	private get stars() {

		return this.scene.children.list.filter(obj => obj instanceof Star) as Star[];
	}

	protected override update(): void {

		if (this.isPaused() || this._gameOver) {

			return;
		}

		for (const star of this.stars) {

			if (star.y + star.displayHeight / 2 < 0) {

				this.killStar(star);

				this._points--;

				if (this._points < 0) {

					this._gameOver = true;

					this.showGameOverMessage();

				} else {

					this.scene.events.emit("update-points", this.card_sequence);
				}
			}
		}
	}

	private showGameOverMessage() {

		const msg = new GameoverPrefab(this.scene);

		this.scene.add.existing(msg);

		this.scene.events.emit("scene-awake");
	}

	private pickStar(star: Star) {

		if (this.isPaused() || this._gameOver) {

			return;
		}

		star.animatePickStar(() => {

			this.killStar(star);
		});

		this._points++;

		this.scene.events.emit("update-points", this._points);

		GameSounds.playBubble();
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
