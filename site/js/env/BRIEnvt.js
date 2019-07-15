'use strict';

import { BRIConst }  from './BRIConst.js';

export class BRIEnvt {
  /* Status du dev */
  static get maturite() { return BRIConst.DEV; }
  
  /* URI du site */
  static get siteLocation() { 
    let retour = window.location.protocol + "//" + window.location.host + "/Bricolage2"; 
    return retour;
  } 

  /* */ 

}