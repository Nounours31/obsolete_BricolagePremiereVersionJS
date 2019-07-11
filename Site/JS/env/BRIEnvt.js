'use strict';

import BRIConst from './BRIConst.js';

export default class BRIEnvt {

  constructor() {
    this._Level = BRIBuildInfo
    this.DNName = "titi";
  }

  static get maturite() { return BRIConst.DEV; }

  get DBName() { return this.DNName;}
  set DBName(nom) { this.DNName = nom; }
}