'use strict';

import { BRIConst } from '../../env/BRIConst.js';
import { BRICommandeMere } from '../BRICommandeMere.js';

export class BRIAuthentification extends BRICommandeMere {

     constructor(jqueryDiv) {
          this._ancrageJQueryDiv = jqueryDiv;
     }


     openMenu() {
          this._ancrageJQueryDiv.text('toto');
     }
}