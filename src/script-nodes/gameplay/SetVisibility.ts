
// You can write more code here

/* START OF COMPILED CODE */

import { ScriptNode } from "@phaserjs/editor-scripts-core";
import Phaser from "phaser";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class SetVisibility extends ScriptNode {

	constructor(parent: ScriptNode | Phaser.GameObjects.GameObject | Phaser.Scene) {
		super(parent);

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	get gameObject() {

		return super.gameObject as Phaser.GameObjects.Image
	}

	execute(visibility: boolean): void {

		this.gameObject.visible = visibility;
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
