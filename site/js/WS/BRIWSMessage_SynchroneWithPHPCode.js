'use strict';

import { BRIConst } from '../env/BRIConst.js';
import { BRIEnvt } from '../env/BRIEnvt.js';
import { BRILogger } from '../tools/BRILogger.js';
import { BRIWSBase } from './BRIWSBase.js';


export class BRIWSMessage_SynchroneWithPHPCode  {
    /* a garder s'equere avec le PHP - meme nom de fichier */

    constructor() {
        this._logger = new BRILogger('BRIWSMessage_SynchroneWithPHPCode');
    }
}