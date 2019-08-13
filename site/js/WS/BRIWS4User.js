/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
'use strict';

import { BRIConst } from '../env/BRIConst.js';
import { BRIEnvt } from '../env/BRIEnvt.js';
import { BRILogger } from '../tools/BRILogger.js';
import { BRIToolsDivers } from '../tools/BRIToolsDivers.js';
import { BRIWSBase } from './BRIWSBase.js';
import { BRIWSMessageClient2Server } from './BRIWSMessageClient2Server.js';
import { BRIWSMessageServer2Client } from './BRIWSMessageServer2Client.js';

export class BRIWS4User extends BRIWSBase {
    constructor(jsonObjInfo) {
        super();
        this._logger = new BRILogger('BRIWSUserCreatePasswd');
        this._userInfo = jsonObjInfo;
    }
    
    
    initPasswd() {
        let l = new BRILogger('BRIWSUserCreatePasswd');
        l.debug ("BRIWS4User::initPasswd");

        let UID = BRIToolsDivers.generateUUID();
        let dataToSend = new BRIWSMessageClient2Server ({ 'requete': 'init_passwd', 'type': 'user', 'args': [{'email': this._userInfo['email']}]});
        let ajaxParam = {
            repoId: UID,
            async: false,
            data : dataToSend.toJSON(),
            url : BRIConst.URL_SERVICE, 
            contentType : 'application/json; charset=UTF-8',
            fct_success : null,
            fct_error : null,
            fct_requestfinished : null,
        };
        this.sendRequest (ajaxParam);


        let rc = this._repository[UID].data;
        delete this._repository[UID];

        return rc;
    }
}

