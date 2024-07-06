import Star from "../prefabs/Star";


/* START OF COMPILED CODE */

import Phaser from "phaser";
import UILayerPrefab from "../prefabs/UILayerPrefab";
import { OnPointerDownScript } from "@phaserjs/editor-scripts-core";
import { EmitEventActionScript } from "@phaserjs/editor-scripts-core";
import { OnEventScript } from "@phaserjs/editor-scripts-core";
import UpdateTextAction from "../script-nodes/gameplay/UpdateTextAction";
import GameplayScript from "../script-nodes/gameplay/GameplayScript";
import TextureInfoScript from "../script-nodes/gameplay/TextureInfoScript";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Level extends Phaser.Scene {

	constructor() {
		super("Level");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	editorCreate(): void {

		// uiLayer
		const uiLayer = new UILayerPrefab(this, 1, 1);
		this.add.existing(uiLayer);

		// text_option_B
		const text_option_B = this.add.text(1337, 387, "", {});
		text_option_B.text = "Opção B";
		text_option_B.setStyle({ "backgroundColor": "#009bc1ff", "fontSize": "50px", "shadow.color": "#fff", "shadow.stroke":true});
		text_option_B.setPadding({"left":10,"top":10,"right":10,"bottom":10});

		// onPointerDownScript
		const onPointerDownScript = new OnPointerDownScript(text_option_B);

		// emitEventActionScript
		const emitEventActionScript = new EmitEventActionScript(onPointerDownScript);

		// text_option_A
		const text_option_A = this.add.text(406, 392, "", {});
		text_option_A.text = "Opção A";
		text_option_A.setStyle({ "backgroundColor": "#ff911aff", "fontSize": "50px" });
		text_option_A.setPadding({"left":10,"top":10,"right":10,"bottom":10});

		// onPointerDownScript_1
		const onPointerDownScript_1 = new OnPointerDownScript(text_option_A);

		// emitEventActionScript_1
		const emitEventActionScript_1 = new EmitEventActionScript(onPointerDownScript_1);

		// decisao_fundo
		const decisao_fundo = this.add.rectangle(985, 207, 215, 128);
		decisao_fundo.scaleX = 4.212742875775465;
		decisao_fundo.scaleY = 2.8391363745211793;
		decisao_fundo.isFilled = true;

		// decisao_titulo
		const decisao_titulo = this.add.text(698, 107, "", {});
		decisao_titulo.text = "Título da Decisão";
		decisao_titulo.setStyle({ "color": "#000000ff", "fontSize": "45px" });

		// onUpdateCard
		const onUpdateCard = new OnEventScript(decisao_titulo);

		// updateTextAction
		new UpdateTextAction(onUpdateCard);

		// decisao_texto
		const decisao_texto = this.add.text(654, 205, "", {});
		decisao_texto.text = "Lorem ipsum dolor sit amet,\nconsectetur adipiscing elit. \nInteger molestie tortor nisi, \n";
		decisao_texto.setStyle({ "color": "#000000ff", "fontSize": "35px" });

		// onUpdateCard_1
		const onUpdateCard_1 = new OnEventScript(decisao_texto);

		// updateTextAction_1
		new UpdateTextAction(onUpdateCard_1);

		// gameplayScript
		const gameplayScript = new GameplayScript(this);

		// yellow
		const yellow = new TextureInfoScript(gameplayScript.textures);

		// orange
		const orange = new TextureInfoScript(gameplayScript.textures);

		// green
		const green = new TextureInfoScript(gameplayScript.textures);

		// emitEventActionScript (prefab fields)
		emitEventActionScript.eventName = "selectB";
		emitEventActionScript.eventEmitter = "scene.events";

		// emitEventActionScript_1 (prefab fields)
		emitEventActionScript_1.eventName = "selectA";
		emitEventActionScript_1.eventEmitter = "scene.events";

		// onUpdateCard (prefab fields)
		onUpdateCard.eventName = "update-card-title";
		onUpdateCard.eventEmitter = "scene.events";

		// onUpdateCard_1 (prefab fields)
		onUpdateCard_1.eventName = "update-card-text";
		onUpdateCard_1.eventEmitter = "scene.events";

		// yellow (prefab fields)
		yellow.texture = {"key":"star-yellow"};

		// orange (prefab fields)
		orange.texture = {"key":"star-orange"};

		// green (prefab fields)
		green.texture = {"key":"star-green"};

		this.events.emit("scene-awake");
	}

	/* START-USER-CODE */

	public id = 0;

	create() {

		this.id++;
		this.editorCreate();
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
