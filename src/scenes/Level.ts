import { GameSounds } from "../GameSounds";


/* START OF COMPILED CODE */

import Phaser from "phaser";
import { OnEventScript } from "@phaserjs/editor-scripts-core";
import SetVisibility from "../script-nodes/gameplay/SetVisibility";
import UILayerPrefab from "../prefabs/UILayerPrefab";
import { OnPointerDownScript } from "@phaserjs/editor-scripts-core";
import { EmitEventActionScript } from "@phaserjs/editor-scripts-core";
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
		this.add.image(960, 540, "background");

		// image_2
		const image_2 = this.add.image(960, 540, "cards-defeat");
		image_2.visible = false;

		// onEventScript_2
		const onEventScript_2 = new OnEventScript(image_2);

		// setVisibility
		new SetVisibility(onEventScript_2);

		// cards_victory
		const cards_victory = this.add.image(960, 540, "cards-victory");
		cards_victory.visible = false;

		// onEventScript_5
		const onEventScript_5 = new OnEventScript(cards_victory);

		// setVisibility_5
		new SetVisibility(onEventScript_5);

		// cards_between
		const cards_between = this.add.image(960, 540, "cards-between");
		cards_between.visible = false;

		// onEventScript_6
		const onEventScript_6 = new OnEventScript(cards_between);

		// setVisibility_4
		new SetVisibility(onEventScript_6);

		// uiLayer
		const uiLayer = new UILayerPrefab(this, 1, 3);
		this.add.existing(uiLayer);

		// text_option_B
		const text_option_B = this.add.text(1296, 443, "", {});
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
		const text_option_A = this.add.text(438, 450, "", {});
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

		// decisao_texto
		const decisao_texto = this.add.text(807, 425, "", {});
		decisao_texto.scaleX = 0.591600758529093;
		decisao_texto.scaleY = 0.6135857060686354;
		decisao_texto.setStyle({ "align": "justify", "color": "#ffffffff", "fixedWidth":511,"fixedHeight":384,"fontSize": "40px" });
		decisao_texto.setWordWrapWidth(511);

		// onUpdateCard_1
		const onUpdateCard_1 = new OnEventScript(decisao_texto);

		// updateTextAction_1
		new UpdateTextAction(onUpdateCard_1);

		// reiniciar_jogo
		const reiniciar_jogo = this.add.text(712, 770, "", {});
		reiniciar_jogo.visible = false;
		reiniciar_jogo.text = "clique nos botões para reiniciar";
		reiniciar_jogo.setStyle({ "align": "center", "backgroundColor": "#421a0689", "fixedWidth":500,"fixedHeight":34,"fontSize": "23px" });

		// onEventScript_3
		const onEventScript_3 = new OnEventScript(reiniciar_jogo);

		// setVisibility_1
		new SetVisibility(onEventScript_3);

		// onPointerDownScript_2
		const onPointerDownScript_2 = new OnPointerDownScript(reiniciar_jogo);

		// emitEventActionScript_2
		const emitEventActionScript_2 = new EmitEventActionScript(onPointerDownScript_2);

		// text_8
		const text_8 = this.add.text(713, 273, "", {});
		text_8.visible = false;
		text_8.text = "Avançar";
		text_8.setStyle({ "align": "center", "backgroundColor": "", "fixedWidth":500,"fixedHeight":70,"fontSize": "50px" });

		// onPointerDownScript_3
		const onPointerDownScript_3 = new OnPointerDownScript(text_8);

		// setVisibility_2
		new SetVisibility(onPointerDownScript_3);

		// emitEventActionScript_3
		const emitEventActionScript_3 = new EmitEventActionScript(onPointerDownScript_3);

		// onEventScript_4
		const onEventScript_4 = new OnEventScript(text_8);

		// setVisibility_3
		new SetVisibility(onEventScript_4);

		// gameplayScript
		const gameplayScript = new GameplayScript(this);

		// yellow
		const yellow = new TextureInfoScript(gameplayScript.textures);

		// orange
		const orange = new TextureInfoScript(gameplayScript.textures);

		// green
		const green = new TextureInfoScript(gameplayScript.textures);

		// onEventScript_2 (prefab fields)
		onEventScript_2.eventName = "defeat";
		onEventScript_2.eventEmitter = "scene.events";

		// onEventScript_5 (prefab fields)
		onEventScript_5.eventName = "victory";
		onEventScript_5.eventEmitter = "scene.events";

		// onEventScript_6 (prefab fields)
		onEventScript_6.eventName = "between";
		onEventScript_6.eventEmitter = "scene.events";

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

		// onUpdateCard_1 (prefab fields)
		onUpdateCard_1.eventName = "update-card-text";
		onUpdateCard_1.eventEmitter = "scene.events";

		// onEventScript_3 (prefab fields)
		onEventScript_3.eventName = "defeat";
		onEventScript_3.eventEmitter = "scene.events";

		// emitEventActionScript_2 (prefab fields)
		emitEventActionScript_2.eventName = "reset";
		emitEventActionScript_2.eventEmitter = "scene.events";

		// emitEventActionScript_3 (prefab fields)
		emitEventActionScript_3.eventName = "drawCard";
		emitEventActionScript_3.eventEmitter = "scene.events";

		// onEventScript_4 (prefab fields)
		onEventScript_4.eventName = "selectOption";
		onEventScript_4.eventEmitter = "scene.events";

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
		GameSounds.init(this);
		this.editorCreate();

        // var config = {
		// 	key: "tucanoAnimation",
		// 	frames: this.anims.generateFrameNumbers("spritesheet", {
		// 	  start: 0,
		// 	  end: 2,
		// 	  first: 0
		// 	}),
		// 	frameRate: 10,
		// 	repeat: -1
		//   };

		//   this.anims.create(config);

		//   this.add.sprite(960, 540, "spritesheet").play("tucanoAnimation");
	}


	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
