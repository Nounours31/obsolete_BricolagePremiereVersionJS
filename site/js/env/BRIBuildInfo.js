'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-08-09 08:00:08';
    this._versionBuild = 'jenkins-Bricolage-1707';
    this._commitGIT = '5d486de6ab1d6319773c7df3ecfae0a10593429e';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}