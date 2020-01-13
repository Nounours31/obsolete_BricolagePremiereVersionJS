'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-01-13 20:00:05';
    this._versionBuild = 'jenkins-Bricolage-874';
    this._commitGIT = 'd2958a0125fa473c3dbd60b2fa8796e355670408';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}