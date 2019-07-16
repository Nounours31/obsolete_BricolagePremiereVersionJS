/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
'use strict';

import { BRIConst } from '../env/BRIConst.js';
import { BRIEnvt } from '../env/BRIEnvt.js';
import { BRILogger } from '../tools/BRILogger.js';
import { BRIWSBase } from './BRIWSBase.js';

export class BRIWS4User extends BRIWSBase {
    constructor() {
        super();
        this._logger = new BRILogger('BRIWSUserCreatePasswd');
    }
    
    static initPasswd(email) {
        let l = new BRILogger('BRIWSUserCreatePasswd');
        l.debug ("BRIWS4User::initPasswd");
    }
}

