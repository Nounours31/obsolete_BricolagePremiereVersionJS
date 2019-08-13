'use strict';

import { BRIConst } from '../env/BRIConst.js';
import { BRIEnvt } from '../env/BRIEnvt.js';
import { BRILogger } from '../tools/BRILogger.js';
import { BRIWSBase } from './BRIWSBase.js';
import { BRIWSMessage_SynchroneWithPHPCode } from './BRIWSMessage_SynchroneWithPHPCode.js';


export class BRIWSMessageClient2Server extends BRIWSMessage_SynchroneWithPHPCode {
    static _requetes2Servers = ['init_passwd', 'change_passwd'];
    static _requetes2ServerType = [BRIConst.MSG_2SERVER_USER, BRIConst.MSG_2SERVER_RESA];

    constructor(jsonObjInfo) {
        super();
        this._logger = new BRILogger('BRIWSMessageClient2Server');
        this._userInfo = jsonObjInfo;
        this._private_init();
    }


    toJSON() {
        let s = "[";
        let iPremier = 0;
        this._args.forEach(element => {
            if (iPremier > 0) s += ", ";
            iPremier++;
            s += `{"${element.name}":"${element.valeur}"}`;
        });
        s += "]";
        s = `{ "${BRIConst.MSG_2SERVER_REQUETE}": "${this._requete}", "${BRIConst.MSG_2SERVER_TYPE}": "${this._type}", "${BRIConst.MSG_2SERVER_ARGS}": ${s} }`;
        return JSON.parse(s);
    }


    _private_SetRequete(requete) {
        this._requete = requete;
    }

    _private_SetRequeteType(requeteType) {
        this._type = requeteType;
    }

    _private_addArgsAsNameValeurInPOST(nom, valeur) {
        if ((typeof this._args === undefined) || (this._args == null)) {
            this._args = [];
        }
        this._args.push({ 'name': nom, 'valeur': valeur });
    }



    _private_init() {
        if (BRIWSMessageClient2Server._private_isValideMessage(this._userInfo)) {
            this._private_SetRequete(this._userInfo.requete);
            this._private_SetRequeteType(this._userInfo.type);

            if ((typeof this._userInfo.args !== undefined) && (Array.isArray(this._userInfo.args))) {
                this._userInfo.args.forEach(element => {
                    if (Array.isArray(Object.keys(element))) {
                        Object.keys(element).forEach(key => {
                            this._private_addArgsAsNameValeurInPOST(key, element[key]);
                        });
                    }
                });
            }
        }
        else {
            this._logger.debug("Invalid parameter sent");
            throw "site/js/WS/BRIWSMessageClient2Server.js::Invalid parameter sent " + this._userInfo;
        }
    }


    static Json2Txt(msg) {
        if (!BRIWSMessageClient2Server._private_isValideMessage(msg))
            throw "site/js/WS/BRIWSMessageClient2Server.js::Invalid JSON as BRIWSMessageClient2Server";

        JSON.stringify (msg);
    }

    static _private_isValideMessage(msg) {
        if ((typeof msg === "undefined") || (msg == null)) {
            return false;
        }

        if ((typeof msg['requete'] === "undefined") || (msg['requete'] == null)) { return false; }
        if (BRIWSMessageClient2Server._requetes2Servers.indexOf(msg.requete) < 0) { return false; }

        if ((typeof msg['type'] === "undefined") || (msg['type'] == null)) { return false; }
        if (BRIWSMessageClient2Server._requetes2ServerType.indexOf(msg.type) < 0) { return false; }

        let argsOK = true;
        return argsOK;
    }

}