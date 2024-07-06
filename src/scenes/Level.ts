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

		// image_1
		this.add.image(960, 540, "fundo-teste");

		// uiLayer
		const uiLayer = new UILayerPrefab(this, 1, 1);
		this.add.existing(uiLayer);

		// text_option_B
		const text_option_B = this.add.text(1296, 442, "", {});
		text_option_B.text = "Opção B";
		text_option_B.setStyle({ "align": "center", "backgroundColor": "", "fixedWidth":180,"fixedHeight":185,"fontSize": "25px", "shadow.color": "#fff", "shadow.stroke":true});
		text_option_B.setPadding({"left":10,"top":10,"right":10,"bottom":10});
		text_option_B.setWordWrapWidth(180);

		// onPointerDownScript
		const onPointerDownScript = new OnPointerDownScript(text_option_B);

		// emitEventActionScript
		const emitEventActionScript = new EmitEventActionScript(onPointerDownScript);

		// onEventScript_1
		const onEventScript_1 = new OnEventScript(text_option_B);

		// updateTextAction_3
		new UpdateTextAction(onEventScript_1);

		// text_option_A
		const text_option_A = this.add.text(438, 449, "", {});
		text_option_A.text = "Opção A";
		text_option_A.setStyle({ "align": "center", "backgroundColor": "", "fixedWidth":193,"fixedHeight":180,"fontSize": "25px" });
		text_option_A.setPadding({"left":10,"top":10,"right":10,"bottom":10});
		text_option_A.setWordWrapWidth(180);

		// onPointerDownScript_1
		const onPointerDownScript_1 = new OnPointerDownScript(text_option_A);

		// emitEventActionScript_1
		const emitEventActionScript_1 = new EmitEventActionScript(onPointerDownScript_1);

		// onEventScript
		const onEventScript = new OnEventScript(text_option_A);

		// updateTextAction_2
		new UpdateTextAction(onEventScript);

		// decisao_fundo
		const decisao_fundo = this.add.rectangle(962, 544, 125, 178);
		decisao_fundo.scaleX = 4.212742875775465;
		decisao_fundo.scaleY = 2.8391363745211793;
		decisao_fundo.isFilled = true;
		decisao_fundo.fillAlpha = 0.7;

		// decisao_titulo
		const decisao_titulo = this.add.text(698, 296, "", {});
		decisao_titulo.text = "Título da Decisão";
		decisao_titulo.setStyle({ "align": "center", "color": "#000000ff", "fixedWidth":531,"fixedHeight":100,"fontSize": "40px" });
		decisao_titulo.setWordWrapWidth(531);

		// onUpdateCard
		const onUpdateCard = new OnEventScript(decisao_titulo);

		// updateTextAction
		new UpdateTextAction(onUpdateCard);

		// decisao_texto
		const decisao_texto = this.add.text(713, 404, "", {});
		decisao_texto.text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam malesuada felis at elit rhoncus viverra a at dolor. In in accumsan nisi. Proin accumsan libero nec sagittis ultrices. Integer non odio quis quam commodo sollicitudin eget sit amet ligula. Nulla congue neque ac pretium malesuada. Praesent in lorem ultrices nibh consectetur suscipit. Nam eget velit tempor, auctor mi et, sollicitudin quam. Aliquam lacinia pretium tincidunt. In rhoncus, felis et tempor commodo, tellus sapien tempor arcu, sit amet cursus ex massa hendrerit nunc. Cras commodo dui eget erat pretium, non maximus elit condimentum. Maecenas nec tincidunt augue. Sed sodales sem et gravida pharetra. Quisque interdum pellentesque neque in blandit. Maecenas eu lectus sem.";
		decisao_texto.setStyle({ "align": "justify", "color": "#000000ff", "fixedWidth":511,"fixedHeight":384,"fontSize": "25px" });
		decisao_texto.setWordWrapWidth(511);

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

		// onEventScript_1 (prefab fields)
		onEventScript_1.eventName = "update-card-option-B-label";
		onEventScript_1.eventEmitter = "scene.events";

		// emitEventActionScript_1 (prefab fields)
		emitEventActionScript_1.eventName = "selectA";
		emitEventActionScript_1.eventEmitter = "scene.events";

		// onEventScript (prefab fields)
		onEventScript.eventName = "update-card-option-A-label";
		onEventScript.eventEmitter = "scene.events";

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
