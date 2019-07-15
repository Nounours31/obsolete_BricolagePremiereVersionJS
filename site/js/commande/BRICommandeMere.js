'use strict';

import { BRIConst } from '../env/BRIConst.js';
import { BRIEnvt } from '../env/BRIEnvt.js';
import singleton from '../tools/BRISingleton.js';

/* class abstraite a ne pas instancier */
export class BRICommandeMere {
    constructor(jqueryBody = null) {
        this._jqueryBody = jqueryBody;
        singleton.isFrameUP = false;

        this._DivHeader = null;
        this._DivMenu = null;
        this._DivDialogue = null;
        this._DivFooter = null;
        this._DivDebug = null;

        this._setUpFrame();
    }

    get divHeader() { return this._DivHeader; }
    get divMenu() { return this._DivMenu; }
    get divDialogue() { return this._DivDialogue; }
    get divFooter() { return this._DivFooter; }
    get divDebug() { return this._DivDebug; }
    
    /* private methode */
    _setUpFrame() {
        if ((typeof this._jqueryBody !== 'undefined') && (!singleton.isFrameUP)) {
            let myFrame = '<div class="BRIIndex_Header"> header </div>';
            myFrame += '<div class="BRIIndex_Menu">Menu</div>';
            myFrame += '<div class="BRIIndex_Contenu"> Contenu </div>';
            myFrame += '<div class="BRIIndex_Footer"> Footer </div>';
            myFrame += '<div class="BRIIndex_Debug"> Debug </div>';
            this._jqueryBody.html(myFrame);
            singleton.isFrameUP = true;

            this._DivHeader = $('div.BRIIndex_Header');
            this._DivMenu = $('div.BRIIndex_Menu');
            this._DivDialogue = $('div.BRIIndex_Contenu');
            this._DivFooter = $('div.BRIIndex_Footer');
            this._DivDebug = $('div.BRIIndex_Debug');
        }
    }
    openMenu() {
    }
    showDialogue() {
    }

    _protected_AddCssOfACommandeInDocument (cssPath) {
        /* ko
        var myCSS = document.createElement("link");
        myCSS.rel = "stylesheet";
        myCSS.href = BRIEnvt.siteLocation + '/' + cssPath;
        */

        /* a tester
        var style = document.createElement('style');
        style.type = 'text/css';
        style.innerHTML = 'content';
        document.getElementsByTagName('head')[0].appendChild(style);
        */

        var link = document.createElement('link');
        link.setAttribute('rel', 'stylesheet');
        link.setAttribute('type', 'text/css');
        link.setAttribute('href', BRIEnvt.siteLocation + '/' + cssPath);
        document.getElementsByTagName('head')[0].appendChild(link);

        return;
    }
    _protected_AddHTMLOfACommandeInDocument(htmlPath, divDialogue) {
        /* load html of the dialogue */
        let msg = '';
        let jAjax = $.ajax({
            async: false,
            url: BRIEnvt.siteLocation + '/' + htmlPath,
            accepts: 'text/plain; charset=utf-8',
            contentType: 'text/plain; charset=utf-8',
        });
        jAjax.done(function (data, textStatus, jqXHR) {
            msg += data;
        });
        jAjax.fail(function (jqXHR, textStatus, err) {
            alert(`No commande ->${htmlPath}<- to load -- err:${err} -- status: ${textStatus}`);
        });   
        divDialogue.html(msg);
        return;
    }
}