/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
'use strict';

import { BRIConst } from '../env/BRIConst.js';
import { BRIEnvt } from '../env/BRIEnvt.js';
import { BRILogger } from '../tools/BRILogger.js';
import { BRIError } from '../tools/BRIError.js';

export class BRIWSBase {
    constructor() {
        this._logger = new BRILogger('BRIWSBase');
    }

    sendRequest (ajaxParam) {
        ajaxParam = (typeof ajaxParam !== 'undefined' ? ajaxParam : null);
        if (ajaxParam == null) {
            return BRIError.E_FAIL;
        }

        /* passage de jsaon a var */
        let data        = (typeof ajaxParam.data !== 'undefined' ? ajaxParam.data : {});
        let async       = (typeof ajaxParam.async !== 'undefined' ? ajaxParam.async : true);
        let method      = (typeof ajaxParam.method !== 'undefined' ? ajaxParam.method : 'POST');
        let url         = (typeof ajaxParam.url !== 'undefined' ? ajaxParam.url : 'localhost'); 
        let cache       = (typeof ajaxParam.cache !== 'undefined' ? ajaxParam.cache : true);
        let contentType = (typeof ajaxParam.contentType !== 'undefined' ? ajaxParam.contentType : 'application/x-www-form-urlencoded; charset=UTF-8' );
        let fct_success = (typeof ajaxParam.fct_success !== 'undefined' ? ajaxParam.fct_success : null);
        let fct_error   = (typeof ajaxParam.fct_error !== 'undefined' ? ajaxParam.fct_error : null);
        let fct_requestfinished = (typeof ajaxParam.fct_requestfinished !== 'undefined' ? ajaxParam.fct_requestfinished : null);
 
        let me = this;
        let httprequest = $.ajax ({
            'async': async,
            'method': method, /* GET, PUT */
            'url': url,
            'contentType' : contentType, /* contenu de l'envoie */
            'headers': {'Accept': 'application/json',},
            'beforeSend': this.fct_setCustomheader, /* Function( jqXHR jqXHR, PlainObject settings ) */
            'cache': cache,
            'accepts': {
                mycustomtype: 'application/x-some-custom-type',
                default: 'application/json',
              },
            'mimeType': 'json', /* force mime type */
            'content': 'application/json', /* response content type */
            'data': data,
            'context': document.body, /* ex: sera this dans cet exempl --> xxx.done(function() { $( this ).addClass( "done" );*/ 
            'converters': {"* text": window.String, "text html": true, "text json": jQuery.parseJSON, "text xml": jQuery.parseXML},
            'timeout': 0, /* in milli sec' */

            'success': (fct_success == null? this.fct_success : fct_success),
            'error': function (jqXHR, textStatus, errorThrown) {
                        let f1 = (fct_error == null? me.fct_error : fct_error);
                        f1 (jqXHR, textStatus, errorThrown);
                        me.fct_manageError (jqXHR);
                    },
            'done': (fct_requestfinished == null? this.fct_requestfinished : fct_requestfinished),
        });

//        httprequest.done (fct_success == null? this.fct_success : fct_success); /* Function( Anything data, String textStatus, jqXHR jqXHR ) */
//        httprequest.fail (fct_error == null? this.fct_error : fct_error); /* Function(  jqXHR jqXHR, String textStatus, String errorThrown ) */
//        httprequest.always (fct_requestfinished == null? this.fct_requestfinished : fct_requestfinished); /* tout est fini y compris sucess ou error : Function( jqXHR jqXHR, String textStatus ) */

        /* a jqXHR object will expose the following properties and methods:
            readyState
            responseXML and/or responseText when the underlying request responded with xml and/or text, respectively
            status
            statusText
            abort( [ statusText ] )
            getAllResponseHeaders() as a string
            getResponseHeader( name )
            overrideMimeType( mimeType )
            setRequestHeader( name, value ) which departs from the standard by replacing the old value with the new one rather than concatenating the new value to the old one
            statusCode( callbacksByStatusCode ) */
    }
    
    fct_setCustomheader(jqXHR, settings) { 
        let l = new BRILogger ('BRIWSBase::fct_setCustomheader');
        l.all('Step in fct_setCustomheader'); 
        l.all(jqXHR); 
        l.all(settings); 
    }
    fct_success(data, textStatus, jqXHR) {  
        let l = new BRILogger ('BRIWSBase::fct_success');
        l.debug('Step in fct_success'); 
        l.debug(`textStatus: ${textStatus}`); 
        l.debug(`data: ${data}`); 
        l.debug(`jqXHR: ${jqXHR}`); 
        l.debug(`jqXHR.status: ${jqXHR.status}`); 
        l.debug(`jqXHR.statusText: ${jqXHR.statusText}`); 
        l.debug('jqXHR.response: '+(typeof jqXHR.responseXML !== 'undefined' ? jqXHR.responseXML : jqXHR.responseText)); 
    }
    fct_error(jqXHR, textStatus, errorThrown) {  
        let l = new BRILogger ('BRIWSBase::fct_error');
        l.error('Step in fct_error'); 
        l.error(jqXHR); 
        l.error(textStatus); 
        l.error("Error trace: " + errorThrown.message); 
        l.error("Error stack: " + errorThrown.stack); 
        l.error("recu: " + (typeof jqXHR.responseXML !== 'undefined' ? jqXHR.responseXML : jqXHR.responseText)); 
    }
    fct_manageError(jqXHR) {  
        let l = new BRILogger ('BRIWSBase::fct_manageError');
        l.error('Step in fct_manageError'); 
        if (BRIEnvt.bUse404AjaxRedirect) {
            if (jqXHR.status != 0) {
              document.location = BRIEnvt.siteLocation + `/site/html/BRIServerError.php?status=${jqXHR.status}`;
            }
        }
        else {

        }
    }
    fct_requestfinished(jqXHR, textStatus) {  
        let l = new BRILogger ('BRIWSBase::fct_requestfinished');
        l.debug('Step in fct_requestfinished'); 
        l.debug(jqXHR); 
        l.debug(textStatus); 
    }


}



