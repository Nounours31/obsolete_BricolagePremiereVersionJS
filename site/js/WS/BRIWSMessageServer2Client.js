'use strict';

import { BRIConst } from '../env/BRIConst.js';
import { BRILogger } from '../tools/BRILogger.js';
import { BRIWSMessage_SynchroneWithPHPCode } from './BRIWSMessage_SynchroneWithPHPCode.js';


export class BRIWSMessageServer2Client extends BRIWSMessage_SynchroneWithPHPCode {
  /* a garder s'equere avec le PHP - meme nom de fichier */
  static _requetesFromServerType = [ BRIConst.MSG_UNDEF, BRIConst.MSG_ERROR, BRIConst.MSG_DATA];


  constructor() {
    super();
    this._logger = new BRILogger('BRIWSMessageServer2Client');
    this._type = BRIConst.MSG_UNDEF;
    this._data = {};
  }

  static buildFromTxt(msg) {
    let x = new BRIWSMessageServer2Client();
    if (BRIWSMessageServer2Client._private_isValideMessage(msg)) {
      x._private_buildFromTxt(msg);
    }
    return x;
  }


  static _private_isValideMessage(msg) {
      let l = new BRILogger('BRIWSMessageServer2Client::_private_isValideMessage');
    try {

      if ((typeof msg === "undefined") || (msg == null)) {
        l.debug ("input null or undifined");
        return false;
      }
      let Obj = JSON.parse(msg);
      if (typeof Obj == "string") {
        Obj = JSON.parse(Obj); 
      }

      if ((typeof Obj['type'] === "undefined") || (Obj['type'] == null)) { 
               l.debug ("input[type undefined]");
        return false; 
     }
      if (BRIWSMessageServer2Client._requetesFromServerType.indexOf(Obj['type']) < 0) { 
               l.debug ("input[type] not in available list of type: " + Obj['type']);
        return false; 
     }

      if ((typeof Obj['data'] === "undefined") || (Obj['data'] == null)) { 
        l.debug ("input[data] not in available ");
        return false; 
      }
    }
    catch (Err) {
      l.fatal (Err.name + " ----- " + Err.message + " ----- " + Err.stack);
      l.fatal (msg);
      
      window.alert(Err.name + " ----- " + Err.message + " ----- " + Err.stack);
      window.alert(msg);
      return false;
    }
    return true;
  }

  _private_buildFromTxt(msg) {
    if (BRIWSMessageServer2Client._private_isValideMessage(msg)) {
      let Obj = JSON.parse(msg);
      if (typeof Obj == "string") {
        Obj = JSON.parse(Obj); 
      }
  
      this._type = Obj.type;

      if (Obj.data[0].errno != null) {
        this._data[BRIConst.MSG_ERROR_ERRNO] = Obj.data[0].errno;
        this._data[BRIConst.MSG_ERROR_DATA] = Obj.data[1].data;        
      }
      else {
        this._data[BRIConst.MSG_ERROR_ERRNO] = Obj.data[1].errno;
        this._data[BRIConst.MSG_ERROR_DATA] = Obj.data[0].data;                
      }
    }
  }

  isErrorMessage() {
    if (this._type == BRIConst.MSG_ERROR) return true;
    return false;
  }

  getErrorCode() {
    if (this.isErrorMessage()) {
      return this._data[BRIConst.MSG_ERROR_ERRNO];
    }
  }
  getErrorMessage(){
    if (this.isErrorMessage()) {
      return this._data[BRIConst.MSG_ERROR_DATA];
    }
  }
}
