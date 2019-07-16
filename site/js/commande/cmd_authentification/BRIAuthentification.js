'use strict';

import { BRIConst } from '../../env/BRIConst.js';
import { BRIEnvt } from '../../env/BRIEnvt.js';
import { BRICommandeMere } from '../BRICommandeMere.js';
import { BRINls } from '../../tools/NLS/BRINls.js';

export class BRIAuthentification extends BRICommandeMere {
    constructor(jqueryBody) {
        super(jqueryBody);
    }

    showDialogue() {
        let divDialogue = this.divDialogue;

        /* Load CSS of the dialogue */
        this._protected_AddCssOfACommandeInDocument("site/js/commande/cmd_authentification/BRIAuthentification.css.inc");

        /* load html of the dialogue */
        let msg = this._protected_AddHTMLOfACommandeInDocument("site/js/commande/cmd_authentification/BRIAuthentification.inc", divDialogue);
    }
}