
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



	private decision_title = "";
	private decision_text = "";
	private decision_option_A_label = "";
	private decision_option_B_label = "";
	private decision_option_A_text = "";
	private decision_option_B_text = "";

	private health = 1.0;
	private money = 2.0;
	private influence_environmentalists = 3.0;
	private influence_militia = 4.0;
	private influence_crypto = 5.0;
	private influence_state = 6.0;

	private option_A_health = 1.0;
	private option_A_money = -1.0;
	private option_A_influence_environmentalists = 1.0;
	private option_A_influence_militia = -1.0;
	private option_A_influence_crypto = 1.0;
	private option_A_influence_state = -1.0;

	private option_B_health = -1.0;
	private option_B_money = 1.0;
	private option_B_influence_environmentalists = -1.0;
	private option_B_influence_militia = 1.0;
	private option_B_influence_crypto = -1.0;
	private option_B_influence_state = 1.0;



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

		this.scene.events.addListener('drawCard', this.drawCard, this)
		this.scene.events.addListener('selectA', this.select_option_A, this)
		this.scene.events.addListener('selectB', this.select_option_B, this)
		this.scene.time.addEvent({
			delay: 100,
			callback: () => this.drawCard()
		});

		//this.spawnStar();

		//this.nextDifficultyLevel();
	}

	private select_option_A(){
		this.health += this.option_A_health;
		this.money += this.option_A_money;
		this.influence_environmentalists += this.option_A_influence_environmentalists;
		this.scene.events.emit("update-card-text",  "Texto da Opção A");
		this.scene.time.addEvent({
			delay: 1000,
			callback: () => this.drawCard()
		});
	}

	private select_option_B(){
		this.health += this.option_B_health;
		this.money += this.option_B_money;
		this.influence_environmentalists += this.option_B_influence_environmentalists;
		this.scene.events.emit("update-card-text",  "Texto da Opção B");
		this.scene.time.addEvent({
			delay: 1000,
			callback: () => this.drawCard()
		});
	}

	private drawCard() {

		switch (this.card_sequence) {
			case 0:
				this.decision_title = "Titulo 1";
				this.decision_text = "Quisque iaculis dolor eget magna dapibus, vitae varius elit blandit. Donec tempor libero ut tempus varius. Ut ac ullamcorper libero, eget semper libero. Proin consequat tempor luctus. Curabitur sed metus sem. Phasellus semper feugiat mi id scelerisque. Nam lectus ante, commodo sit amet volutpat sit amet, congue vel massa. Donec at sapien eget libero ultrices vulputate. Nam finibus dapibus malesuada. Aliquam feugiat malesuada ipsum eget finibus. Sed molestie pellentesque leo, vulputate tincidunt velit consequat nec. Nullam in neque sed nibh egestas dictum. Proin id iaculis velit.";
				this.decision_option_A_label = "A 1";
				this.decision_option_B_label = "B 1";
				break;
			case 1:
				this.decision_title = "Titulo 2";
				this.decision_text = "Quisque eleifend egestas erat, ut auctor odio. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam consequat ex nunc, ac faucibus neque gravida nec. Ut sodales, neque sed dapibus dictum, justo nibh tincidunt velit, a venenatis magna tellus et nibh. Nulla sed purus id urna cursus auctor. Suspendisse potenti. Vivamus et velit pretium, malesuada justo nec, feugiat arcu. Phasellus egestas diam sed finibus tristique. Quisque pharetra lacinia lacus, id elementum odio bibendum eget. Praesent viverra libero eu nisl auctor, quis hendrerit urna consectetur. Morbi vitae nunc lacus. Ut tempus sit amet arcu et dignissim. Vestibulum dui ante, scelerisque sit amet eros ut, commodo tristique nisl.";
				this.decision_option_A_label = "A 2";
				this.decision_option_B_label = "B 2";
				break;
			default:
				this.decision_title = "Titulo D";
				this.decision_text = "Nam interdum sed eros et commodo. Cras ut elit urna. Duis vel sapien a leo luctus mattis in eget dui. Curabitur eu auctor massa. Cras posuere lorem et auctor auctor. Etiam ornare ut mi sit amet imperdiet. Nulla ac bibendum magna. Donec a consequat odio. Pellentesque et faucibus magna. Nam mi ex, laoreet eget dapibus sed, fermentum non dolor. Nam at luctus leo, non porta quam. Nam eu metus sit amet erat finibus tristique a id justo. Cras pellentesque id magna vitae volutpat.";
				this.decision_option_A_label = "A D";
				this.decision_option_B_label = "B D";
				break;
		}
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
	}

	private nextDifficultyLevel() {

		if (this._gameOver) {

			return;
		}

		this._baseGravity += 50;
		this._maxSpawnDelay =  Math.max(this._maxSpawnDelay - 100, 0);

		this.scene.time.addEvent({
			delay: 5000,
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
