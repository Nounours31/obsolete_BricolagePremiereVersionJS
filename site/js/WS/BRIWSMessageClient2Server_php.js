'use strict';

import { BRIConst } from '../env/BRIConst.js';
import { BRIEnvt } from '../env/BRIEnvt.js';
import { BRILogger } from '../tools/BRILogger.js';
import { BRIWSBase } from './BRIWSBase.js';
import { BRIWSMessageClient2Server_php } from './BRIWSMessageClient2Server_php.js';


export class BRIWSMessageClient2Server_php  {
    /* a garder s'equere avec le PHP - meme nom de fichier */
    static _requetsValides = ['user_init_passwd', 'user_', 'resa_'];

    constructor(jsonObjInfo) {
        super();
        this._logger = new BRILogger('BRIWSUserCreatePasswd');
        this._userInfo = jsonObjInfo;
        this.private_init();
    }
    
    addRequete(requete) {
        this._requete = requete;
    }

    addArgs(nom, valeur) {
        if (typeof this._args === undefined) {
            this._args = [];
        }
        this._args.push ({'name': name, 'valeur': valeur});
    }
    
    isValideMessage() {
        if (!(_requete in this)) { return false; }
        if (_requetsValides.indexOf (this._requete) < 0) { return false; }

        if (!(_args in this)) { return false; } 
        let argsOK = true;
        this._args.forEach(element => {
            if ((!(nom in element)) || (!(valeur in element))) { argsOK = false;}
        });        
        return argsOK;
    }

    private_init() {
        if (typeof this._userInfo === undefined)
            return;
        
        if (typeof this._userInfo.requete !== undefined) {
            this.addRequete (this._userInfo.requete);
        }

        if ((typeof this._userInfo.args !== undefined) && (Array.isArray(this._userInfo.args))) {
            this._userInfo.args.array.forEach(element => {
                if ((nom in element) && (valeur in element)) {
                    this.addArgs (element.nom, element.valeur);
                }
            });
        }

    }
}