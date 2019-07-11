'use strict';

import BRIConst from '../env/BRIConst.js';

export default class BRIEnvt {

     constructor(jqueryDiv) {
          this._ancrageJQueryDiv = jqueryDiv;
     }


     openMenu() {
          this._ancrageJQueryDiv.text('toto');
     }
}