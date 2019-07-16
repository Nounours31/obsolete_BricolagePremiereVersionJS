'use strict';
import {BRINlsAllMessages as eNLS} from './BRINlsAllMessages.js';
import {BRILogger} from '../BRILogger.js';
import {BRIEnvt} from '../../env/BRIEnvt.js';
import {BRIConst} from '../../env/BRIConst.js';

/* NLS management */
export class BRINls {
    constructor() {
        this._log = new BRILogger("BRINls");
    }
    
    static replaceAllTags (sMessage) {
        let buffer = sMessage;
        let retour = buffer;
        let bFin = false;
        while (! bFin) {
            /* Y a t il encore des NLS a remplacer ?*/
            let i = buffer.indexOf("BRINls(");
            let j = 0;
            if (i == -1) {
                bFin = true;
            }
            else {
                /* je prend le message avant le tag NLS */
                retour = buffer.substr(0, i);
                i = 1 + buffer.indexOf("(", i);
                j = buffer.indexOf(")", i);
                
                /* le tag NLS correspondant */
                let tag = buffer.substr(i, (j-i));
                retour += BRINls.get (tag);
                retour += buffer.substr (j + 1);
            }
            buffer = retour;
        }
        return retour;
    }
    
    /* return la valeur d'un TAG NLS sans variable dans le message */
    static get(tag) {
        let tab = [];
        let nls = new BRINls();
        return nls._private_getPT(tag, tab);
    }

    /* return la valeur d'un TAG NLS avec des parametres dans le message */
    static getP(tag, replace) {
        let tab = [replace];
        let nls = new BRINls();
        return nls._private_getPT(tag, tab);
    }

    _private_getPT(tag, replace) {
        let s = eNLS[tag];
        this._log.all ("eNLS:", eNLS);
        if (s === undefined) {
            s = `*** BRINls TAG KO: recheche KO de [${tag}]`;
            return s;
        }

        if (replace.length >= 0) {
            let dollarRegExp = new RegExp('\\$[0-9]+');
            let fin = false;
            let iTaille = replace.length;
            if (iTaille > 9) {
                let x = new BRILogger ('BRINls');
                let msg = 'Impossible de gerer plus de 9 arg par TAG dans le NLS';
                x.fatal(msg);
                throw (msg);
            }

            let iReplace = 0;
            while ((!fin) && (iReplace < iTaille)) {
                let iposition = s.search(dollarRegExp);
                if (iposition < 0) {
                    fin = true;
                } else {
                    let sDebut = s.substring(0, iposition); // -2 = taille de '$9'.length
                    let sFin = s.substring(iposition + 2, s.length);
                    s = sDebut + replace[iReplace] + sFin;
                    iReplace++;
                }
            }
        }

        if (BRIEnvt.bDebugNLS) {
            s = '[NLS]' + s;
        }

        return s;
    }
}

