'use strict';

import { BRIConst } from '../../env/BRIConst.js';
import { BRIEnvt } from '../../env/BRIEnvt.js';
import { BRICommandeMere } from '../BRICommandeMere.js';
import { BRINls } from '../../tools/NLS/BRINls.js';
import { BRILogger } from '../../tools/BRILogger.js';
import { BRIWS4User } from '../../WS/BRIWS4User.js';

export class BRIAuthentification extends BRICommandeMere {
    constructor(jqueryBody) {
        super(jqueryBody);
        this._logger = new BRILogger('BRIAuthentification');
    }

    showDialogue() {
        let divDialogue = this.divDialogue;

        /* Load CSS of the dialogue */
        this._protected_AddCssOfACommandeInDocument("site/js/commande/cmd_authentification/BRIAuthentification.css.inc");

        /* load html of the dialogue */
        let msg = this._protected_AddHTMLOfACommandeInDocument("site/js/commande/cmd_authentification/BRIAuthentification.inc", divDialogue);
    }

    static createPassword() {
        let l = new BRILogger('BRIAuthentification::createPassword');
        UIkit.modal.prompt(BRINls.get('LOGIN_CREATE_PWD_EMAIL'), BRINls.get('LOGIN_CREATE_PWD_EMAIL_EMAIL')).then(function (email) {
            l.all('Prompted: ' + email);
            if (typeof email === 'undefined' || email === null || email.length < 2) {
                UIkit.modal.alert( BRINls.get('LOGIN_CREATE_PWD_EMAIL_INVALIDE'));
                l.error ('Email vide');                
            }
            else {
                let re = /\S+@\S+\.\S+/;
                if (! re.test(email)) {
                    UIkit.modal.alert( BRINls.get('LOGIN_CREATE_PWD_EMAIL_INVALIDE'));
                    l.error ('Email invalide');
                } 
                else {
                    let notYetAUser = new BRIWS4User( { 'email' : email, });
                    let rc=notYetAUser.initPasswd ();
                    if (rc.isErrorMessage()) {
                        let tab = [rc.getErrorCode(), rc.getErrorMessage()];
                        UIkit.modal.alert( BRINls.getP('LOGIN_CREATE_ERROR', tab));
                    }
                    else {
                        UIkit.modal.alert( BRINls.getP('LOGIN_CREATE_PWD_EMAIL_SEND', email));
                        l.all ('mail envoyed');    
                    }
                }
            }
        });
    }
}
window.BRIAuthentification_createPassword = BRIAuthentification.createPassword;