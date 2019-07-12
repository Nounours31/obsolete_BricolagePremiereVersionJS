'use strict';

import BRIConst from '../env/BRIConst.js';

export default class BRIAuthentification {

     constructor(jqueryDiv) {
          this._ancrageJQueryDiv = jqueryDiv;
     }


     openMenu() {
          this._ancrageJQueryDiv.text('toto');
     }
}