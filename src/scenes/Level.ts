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
		const text_option_B = this.add.text(1294, 452, "", {});
		text_option_B.setStyle({ "align": "center", "backgroundColor": "", "color": "#29412b", "fixedWidth":189,"fixedHeight":180,"fontFamily": "Fredoka", "fontSize": "28px", "shadow.color": "#fff", "shadow.stroke":true});
		text_option_B.setPadding({"bottom":10});
		text_option_B.setWordWrapWidth(185);

		// onPointerDownScript
		const onPointerDownScript = new OnPointerDownScript(text_option_B);

		// emitEventActionScript
		const emitEventActionScript = new EmitEventActionScript(onPointerDownScript);

		// onEventScript_1
		const onEventScript_1 = new OnEventScript(text_option_B);

		// updateTextAction_3
		new UpdateTextAction(onEventScript_1);

		// text_option_A
		const text_option_A = this.add.text(440, 452, "", {});
		text_option_A.setStyle({ "align": "center", "backgroundColor": "", "color": "#29412b", "fixedWidth":190,"fixedHeight":178,"fontFamily": "Fredoka", "fontSize": "28px" });
		text_option_A.setWordWrapWidth(190);

		// onPointerDownScript_1
		const onPointerDownScript_1 = new OnPointerDownScript(text_option_A);

		// emitEventActionScript_1
		const emitEventActionScript_1 = new EmitEventActionScript(onPointerDownScript_1);

		// onEventScript
		const onEventScript = new OnEventScript(text_option_A);

		// updateTextAction_2
		new UpdateTextAction(onEventScript);

		// decisao_texto
		const decisao_texto = this.add.text(822, 402, "", {});
		decisao_texto.scaleX = 0.591600758529093;
		decisao_texto.scaleY = 0.6135857060686354;
		decisao_texto.setStyle({ "align": "center", "color": "#29412b", "fixedWidth":473,"fixedHeight":458,"fontFamily": "Fredoka", "fontSize": "28px" });
		decisao_texto.setWordWrapWidth(460);

		// onUpdateCard_1
		const onUpdateCard_1 = new OnEventScript(decisao_texto);

		// updateTextAction_1
		new UpdateTextAction(onUpdateCard_1);

		// reiniciar_jogo
		const reiniciar_jogo = this.add.text(712, 770, "", {});
		reiniciar_jogo.visible = false;
		reiniciar_jogo.text = "clique nos botões para reiniciar";
		reiniciar_jogo.setStyle({ "align": "center", "backgroundColor": "#421a0689", "color": "#29412b", "fixedWidth":500,"fixedHeight":34,"fontFamily": "Fredoka", "fontSize": "23px" });

		// onEventScript_3
		const onEventScript_3 = new OnEventScript(reiniciar_jogo);

		// setVisibility_1
		new SetVisibility(onEventScript_3);

		// onPointerDownScript_2
		const onPointerDownScript_2 = new OnPointerDownScript(reiniciar_jogo);

		// emitEventActionScript_2
		const emitEventActionScript_2 = new EmitEventActionScript(onPointerDownScript_2);

		// text_8
		const text_8 = this.add.text(713, 766, "", {});
		text_8.visible = false;
		text_8.text = "Avançar";
		text_8.setStyle({ "align": "center", "backgroundColor": "", "color": "#29412b", "fixedWidth":500,"fontFamily": "Fredoka", "fontSize": "28px" });

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

		// passaro_01
		const passaro_01 = this.add.image(960, 540, "passaro_01");
		passaro_01.visible = false;

		// onEventScript_7
		const onEventScript_7 = new OnEventScript(passaro_01);

		// setVisibility_6
		new SetVisibility(onEventScript_7);

		// passaro_02
		const passaro_02 = this.add.image(960, 540, "passaro_02");
		passaro_02.visible = false;

		// onEventScript_8
		const onEventScript_8 = new OnEventScript(passaro_02);

		// setVisibility_7
		new SetVisibility(onEventScript_8);

		// passaro_03
		const passaro_03 = this.add.image(960, 540, "passaro_03");
		passaro_03.visible = false;

		// onEventScript_9
		const onEventScript_9 = new OnEventScript(passaro_03);

		// setVisibility_8
		new SetVisibility(onEventScript_9);

		// passaro_04
		const passaro_04 = this.add.image(960, 540, "passaro_04");
		passaro_04.visible = false;

		// onEventScript_10
		const onEventScript_10 = new OnEventScript(passaro_04);

		// setVisibility_9
		new SetVisibility(onEventScript_10);

		// passaro_05
		const passaro_05 = this.add.image(960, 540, "passaro_05");
		passaro_05.visible = false;

		// onEventScript_11
		const onEventScript_11 = new OnEventScript(passaro_05);

		// setVisibility_10
		new SetVisibility(onEventScript_11);

		// passaro_06
		const passaro_06 = this.add.image(960, 540, "passaro_06");
		passaro_06.visible = false;

		// onEventScript_12
		const onEventScript_12 = new OnEventScript(passaro_06);

		// setVisibility_11
		new SetVisibility(onEventScript_12);

		// passaro_07
		const passaro_07 = this.add.image(960, 540, "passaro_07");
		passaro_07.visible = false;

		// onEventScript_13
		const onEventScript_13 = new OnEventScript(passaro_07);

		// setVisibility_12
		new SetVisibility(onEventScript_13);

		// passaro_08
		const passaro_08 = this.add.image(960, 540, "passaro_08");
		passaro_08.visible = false;

		// onEventScript_14
		const onEventScript_14 = new OnEventScript(passaro_08);

		// setVisibility_13
		new SetVisibility(onEventScript_14);

		// passaro_09
		const passaro_09 = this.add.image(960, 540, "passaro_09");
		passaro_09.visible = false;

		// onEventScript_15
		const onEventScript_15 = new OnEventScript(passaro_09);

		// setVisibility_14
		new SetVisibility(onEventScript_15);

		// passaro_10
		const passaro_10 = this.add.image(960, 540, "passaro_10");
		passaro_10.visible = false;

		// onEventScript_16
		const onEventScript_16 = new OnEventScript(passaro_10);

		// setVisibility_15
		new SetVisibility(onEventScript_16);

		// passaro_11
		const passaro_11 = this.add.image(960, 540, "passaro_11");
		passaro_11.visible = false;

		// onEventScript_17
		const onEventScript_17 = new OnEventScript(passaro_11);

		// setVisibility_16
		new SetVisibility(onEventScript_17);

		// passaro_12
		const passaro_12 = this.add.image(960, 540, "passaro_12");
		passaro_12.visible = false;

		// onEventScript_18
		const onEventScript_18 = new OnEventScript(passaro_12);

		// setVisibility_17
		new SetVisibility(onEventScript_18);

		// passaro_13
		const passaro_13 = this.add.image(960, 540, "passaro_13");
		passaro_13.visible = false;

		// onEventScript_19
		const onEventScript_19 = new OnEventScript(passaro_13);

		// setVisibility_18
		new SetVisibility(onEventScript_19);

		// passaro_14
		const passaro_14 = this.add.image(960, 540, "passaro_14");
		passaro_14.visible = false;

		// onEventScript_20
		const onEventScript_20 = new OnEventScript(passaro_14);

		// setVisibility_19
		new SetVisibility(onEventScript_20);

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

		// onEventScript_7 (prefab fields)
		onEventScript_7.eventName = "passaro_1";
		onEventScript_7.eventEmitter = "scene.events";

		// onEventScript_8 (prefab fields)
		onEventScript_8.eventName = "passaro_2";
		onEventScript_8.eventEmitter = "scene.events";

		// onEventScript_9 (prefab fields)
		onEventScript_9.eventName = "passaro_3";
		onEventScript_9.eventEmitter = "scene.events";

		// onEventScript_10 (prefab fields)
		onEventScript_10.eventName = "passaro_4";
		onEventScript_10.eventEmitter = "scene.events";

		// onEventScript_11 (prefab fields)
		onEventScript_11.eventName = "passaro_5";
		onEventScript_11.eventEmitter = "scene.events";

		// onEventScript_12 (prefab fields)
		onEventScript_12.eventName = "passaro_6";
		onEventScript_12.eventEmitter = "scene.events";

		// onEventScript_13 (prefab fields)
		onEventScript_13.eventName = "passaro_7";
		onEventScript_13.eventEmitter = "scene.events";

		// onEventScript_14 (prefab fields)
		onEventScript_14.eventName = "passaro_8";
		onEventScript_14.eventEmitter = "scene.events";

		// onEventScript_15 (prefab fields)
		onEventScript_15.eventName = "passaro_9";
		onEventScript_15.eventEmitter = "scene.events";

		// onEventScript_16 (prefab fields)
		onEventScript_16.eventName = "passaro_10";
		onEventScript_16.eventEmitter = "scene.events";

		// onEventScript_17 (prefab fields)
		onEventScript_17.eventName = "passaro_11";
		onEventScript_17.eventEmitter = "scene.events";

		// onEventScript_18 (prefab fields)
		onEventScript_18.eventName = "passaro_12";
		onEventScript_18.eventEmitter = "scene.events";

		// onEventScript_19 (prefab fields)
		onEventScript_19.eventName = "passaro_13";
		onEventScript_19.eventEmitter = "scene.events";

		// onEventScript_20 (prefab fields)
		onEventScript_20.eventName = "passaro_14";
		onEventScript_20.eventEmitter = "scene.events";

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
