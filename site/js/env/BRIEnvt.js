'use strict';

import { BRIConst }  from './BRIConst.js';

export class BRIEnvt {
    /* URI du site */
    static get siteLocation() {
        let retour = window.location.protocol + "//" + window.location.host + "/Bricolage2";
        return retour;
    }

    /* Status du dev */
    static get maturite() {
        return BRIConst.DEV;
    }

    static get bDebugNLS() {
        if (BRIEnvt.maturite == BRIConst.DEV) {
            return true;
        }
    }

    static get debugLevel() {
        return BRIConst.DEBUG;
    }
    /* */

}