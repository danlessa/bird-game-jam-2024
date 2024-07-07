
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
import FloatingObjectScript from "../script-nodes/ui/FloatingObjectScript";
import OnPointerDownStartSceneScript from "../script-nodes/ui/OnPointerDownStartSceneScript";
import { OnEventScript } from "@phaserjs/editor-scripts-core";
import UpdateTextAction from "../script-nodes/gameplay/UpdateTextAction";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class UILayerPrefab extends Phaser.GameObjects.Container {

	constructor(scene: Phaser.Scene, x?: number, y?: number) {
		super(scene, x ?? 0, y ?? 0);

		// homeButton
		const homeButton = scene.add.image(1781, 116, "buttons", "Button Pack - Green_Button Green - Home.png");
		homeButton.visible = false;
		this.add(homeButton);

		// floatingObjectScript_1
		const floatingObjectScript_1 = new FloatingObjectScript(homeButton);

		// onPointerDownStartSceneScript
		const onPointerDownStartSceneScript = new OnPointerDownStartSceneScript(homeButton);

		// pointsCounter_count
		const pointsCounter_count = scene.add.bitmapText(1773, 289, "hyperdrive", "0");
		pointsCounter_count.setOrigin(0.5, 0.5);
		pointsCounter_count.visible = false;
		pointsCounter_count.tintFill = true;
		pointsCounter_count.tintTopLeft = 8504341;
		pointsCounter_count.tintTopRight = 8504341;
		pointsCounter_count.tintBottomLeft = 14790987;
		pointsCounter_count.tintBottomRight = 14790987;
		pointsCounter_count.text = "0";
		pointsCounter_count.fontSize = 100;
		this.add(pointsCounter_count);

		// floatingObjectScript_5
		const floatingObjectScript_5 = new FloatingObjectScript(pointsCounter_count);

		// onUpdatePoints
		const onUpdatePoints = new OnEventScript(pointsCounter_count);

		// updatePointsAction
		new UpdateTextAction(onUpdatePoints);

		// pointsCounter_money
		const pointsCounter_money = scene.add.text(1026, 123, "", {});
		pointsCounter_money.setOrigin(0.5, 0.5);
		pointsCounter_money.tintTopLeft = 16777215;
		pointsCounter_money.tintTopRight = 16777215;
		pointsCounter_money.tintBottomLeft = 14790987;
		pointsCounter_money.tintBottomRight = 14790987;
		pointsCounter_money.text = "0";
		pointsCounter_money.setStyle({ "align": "right", "fixedWidth":300,"fontSize": "100px" });
		this.add(pointsCounter_money);

		// floatingObjectScript
		const floatingObjectScript = new FloatingObjectScript(pointsCounter_money);

		// onUpdatePoints_1
		const onUpdatePoints_1 = new OnEventScript(pointsCounter_money);

		// updatePointsAction_1
		new UpdateTextAction(onUpdatePoints_1);

		// text_1
		const text_1 = scene.add.text(805, 73, "", {});
		text_1.text = "$";
		text_1.setStyle({ "fontSize": "100px" });
		this.add(text_1);

		// text
		const text = scene.add.text(23, 293, "", {});
		text.visible = false;
		text.text = "Ambientalistas:";
		text.setStyle({ "fontSize": "30px" });
		this.add(text);

		// text_2
		const text_2 = scene.add.text(26, 340, "", {});
		text_2.visible = false;
		text_2.text = "Crypto:";
		text_2.setStyle({ "fontSize": "30px" });
		this.add(text_2);

		// text_3
		const text_3 = scene.add.text(29, 388, "", {});
		text_3.visible = false;
		text_3.text = "Milicias:";
		text_3.setStyle({ "fontSize": "30px" });
		this.add(text_3);

		// text_4
		const text_4 = scene.add.text(24, 435, "", {});
		text_4.visible = false;
		text_4.text = "Estado:";
		text_4.setStyle({ "fontSize": "30px" });
		this.add(text_4);

		// text_5
		const text_5 = scene.add.text(25, 614, "", {});
		text_5.setStyle({ "fontSize": "60px" });
		this.add(text_5);

		// text_6
		const text_6 = scene.add.text(1697, 254, "", {});
		text_6.visible = false;
		text_6.text = "#";
		text_6.setStyle({ "fontSize": "60px" });
		this.add(text_6);

		// pointsCounter_influence_enviromentalists
		const pointsCounter_influence_enviromentalists = scene.add.bitmapText(317, 306, "hyperdrive", "0");
		pointsCounter_influence_enviromentalists.setOrigin(0.5, 0.5);
		pointsCounter_influence_enviromentalists.visible = false;
		pointsCounter_influence_enviromentalists.tintFill = true;
		pointsCounter_influence_enviromentalists.tintTopLeft = 8504341;
		pointsCounter_influence_enviromentalists.tintTopRight = 8504341;
		pointsCounter_influence_enviromentalists.tintBottomLeft = 14790987;
		pointsCounter_influence_enviromentalists.tintBottomRight = 14790987;
		pointsCounter_influence_enviromentalists.text = "0";
		pointsCounter_influence_enviromentalists.fontSize = 30;
		this.add(pointsCounter_influence_enviromentalists);

		// floatingObjectScript_6
		const floatingObjectScript_6 = new FloatingObjectScript(pointsCounter_influence_enviromentalists);

		// onUpdatePoints_2
		const onUpdatePoints_2 = new OnEventScript(pointsCounter_influence_enviromentalists);

		// updatePointsAction_2
		new UpdateTextAction(onUpdatePoints_2);

		// pointsCounter_influence_crypto
		const pointsCounter_influence_crypto = scene.add.bitmapText(316, 355, "hyperdrive", "0");
		pointsCounter_influence_crypto.setOrigin(0.5, 0.5);
		pointsCounter_influence_crypto.visible = false;
		pointsCounter_influence_crypto.tintFill = true;
		pointsCounter_influence_crypto.tintTopLeft = 8504341;
		pointsCounter_influence_crypto.tintTopRight = 8504341;
		pointsCounter_influence_crypto.tintBottomLeft = 14790987;
		pointsCounter_influence_crypto.tintBottomRight = 14790987;
		pointsCounter_influence_crypto.text = "0";
		pointsCounter_influence_crypto.fontSize = 30;
		this.add(pointsCounter_influence_crypto);

		// floatingObjectScript_7
		const floatingObjectScript_7 = new FloatingObjectScript(pointsCounter_influence_crypto);

		// onUpdatePoints_3
		const onUpdatePoints_3 = new OnEventScript(pointsCounter_influence_crypto);

		// updatePointsAction_3
		new UpdateTextAction(onUpdatePoints_3);

		// pointsCounter_influence_militia
		const pointsCounter_influence_militia = scene.add.bitmapText(314, 402, "hyperdrive", "0");
		pointsCounter_influence_militia.setOrigin(0.5, 0.5);
		pointsCounter_influence_militia.visible = false;
		pointsCounter_influence_militia.tintFill = true;
		pointsCounter_influence_militia.tintTopLeft = 8504341;
		pointsCounter_influence_militia.tintTopRight = 8504341;
		pointsCounter_influence_militia.tintBottomLeft = 14790987;
		pointsCounter_influence_militia.tintBottomRight = 14790987;
		pointsCounter_influence_militia.text = "0";
		pointsCounter_influence_militia.fontSize = 30;
		this.add(pointsCounter_influence_militia);

		// floatingObjectScript_8
		const floatingObjectScript_8 = new FloatingObjectScript(pointsCounter_influence_militia);

		// onUpdatePoints_4
		const onUpdatePoints_4 = new OnEventScript(pointsCounter_influence_militia);

		// updatePointsAction_4
		new UpdateTextAction(onUpdatePoints_4);

		// pointsCounter_influence_estado
		const pointsCounter_influence_estado = scene.add.bitmapText(311, 456, "hyperdrive", "0");
		pointsCounter_influence_estado.setOrigin(0.5, 0.5);
		pointsCounter_influence_estado.visible = false;
		pointsCounter_influence_estado.tintFill = true;
		pointsCounter_influence_estado.tintTopLeft = 8504341;
		pointsCounter_influence_estado.tintTopRight = 8504341;
		pointsCounter_influence_estado.tintBottomLeft = 14790987;
		pointsCounter_influence_estado.tintBottomRight = 14790987;
		pointsCounter_influence_estado.text = "0";
		pointsCounter_influence_estado.fontSize = 30;
		this.add(pointsCounter_influence_estado);

		// floatingObjectScript_9
		const floatingObjectScript_9 = new FloatingObjectScript(pointsCounter_influence_estado);

		// onUpdatePoints_5
		const onUpdatePoints_5 = new OnEventScript(pointsCounter_influence_estado);

		// updatePointsAction_5
		new UpdateTextAction(onUpdatePoints_5);

		// pointsCounter_health
		const pointsCounter_health = scene.add.bitmapText(201, 75, "hyperdrive", "0");
		pointsCounter_health.setOrigin(0.5, 0.5);
		pointsCounter_health.visible = false;
		pointsCounter_health.tintFill = true;
		pointsCounter_health.tintTopLeft = 8504341;
		pointsCounter_health.tintTopRight = 8504341;
		pointsCounter_health.tintBottomLeft = 14790987;
		pointsCounter_health.tintBottomRight = 14790987;
		pointsCounter_health.text = "0";
		pointsCounter_health.fontSize = 100;
		this.add(pointsCounter_health);

		// floatingObjectScript_10
		const floatingObjectScript_10 = new FloatingObjectScript(pointsCounter_health);

		// onUpdatePoints_6
		const onUpdatePoints_6 = new OnEventScript(pointsCounter_health);

		// updatePointsAction_6
		new UpdateTextAction(onUpdatePoints_6);

		// text_7
		const text_7 = scene.add.text(15, 76, "", {});
		text_7.visible = false;
		text_7.text = "saude";
		text_7.setStyle({ "fontSize": "40px" });
		this.add(text_7);

		// floatingObjectScript_1 (prefab fields)
		floatingObjectScript_1.offset = 5;

		// onPointerDownStartSceneScript.startSceneActionScript (prefab fields)
		onPointerDownStartSceneScript.startSceneActionScript.sceneKey = "Welcome";

		// floatingObjectScript_5 (prefab fields)
		floatingObjectScript_5.offset = 5;

		// onUpdatePoints (prefab fields)
		onUpdatePoints.eventName = "update-points";
		onUpdatePoints.eventEmitter = "scene.events";

		// floatingObjectScript (prefab fields)
		floatingObjectScript.offset = 5;

		// onUpdatePoints_1 (prefab fields)
		onUpdatePoints_1.eventName = "update-money";
		onUpdatePoints_1.eventEmitter = "scene.events";

		// floatingObjectScript_6 (prefab fields)
		floatingObjectScript_6.offset = 5;

		// onUpdatePoints_2 (prefab fields)
		onUpdatePoints_2.eventName = "update-inf-env";
		onUpdatePoints_2.eventEmitter = "scene.events";

		// floatingObjectScript_7 (prefab fields)
		floatingObjectScript_7.offset = 5;

		// onUpdatePoints_3 (prefab fields)
		onUpdatePoints_3.eventName = "update-inf-crypto";
		onUpdatePoints_3.eventEmitter = "scene.events";

		// floatingObjectScript_8 (prefab fields)
		floatingObjectScript_8.offset = 5;

		// onUpdatePoints_4 (prefab fields)
		onUpdatePoints_4.eventName = "update-inf-militia";
		onUpdatePoints_4.eventEmitter = "scene.events";

		// floatingObjectScript_9 (prefab fields)
		floatingObjectScript_9.offset = 5;

		// onUpdatePoints_5 (prefab fields)
		onUpdatePoints_5.eventName = "update-inf-est";
		onUpdatePoints_5.eventEmitter = "scene.events";

		// floatingObjectScript_10 (prefab fields)
		floatingObjectScript_10.offset = 5;

		// onUpdatePoints_6 (prefab fields)
		onUpdatePoints_6.eventName = "update-health";
		onUpdatePoints_6.eventEmitter = "scene.events";

		/* START-USER-CTR-CODE */
		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
