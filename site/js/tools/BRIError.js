"use strict";

import {BRIConst} from '../env/BRIConst.js';

export class BRIError {
    constructor(iErr, iMsg = 'No message') {
        this._code = iErr;
        this._msg = iMsg;
    }

    static get S_OK() {
        return new BRIError (BRIConst.S_OK);
    }

    static get E_FAIL() {
        return new BRIError (BRIConst.E_FAIL);
    }
}
