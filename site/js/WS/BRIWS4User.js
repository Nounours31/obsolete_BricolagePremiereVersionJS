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
    constructor(jsonObjInfo) {
        super();
        this._logger = new BRILogger('BRIWSUserCreatePasswd');
        this._userInfo = jsonObjInfo;
    }
    
    
    initPasswd() {
        let l = new BRILogger('BRIWSUserCreatePasswd');
        l.debug ("BRIWS4User::initPasswd");

        let dataToSend = {'coucou': 'valeur', 'email': this._userInfo['email']};
        let ajaxParam = {
            data : dataToSend,
            url : '../../server/WS/BRIUser.php', 
            contentType : 'application/x-www-form-urlencoded; charset=UTF-8',
            fct_success : null,
            fct_error : null,
            fct_requestfinished : null,
        };
        this.sendRequest (ajaxParam);
    
    }
}

