'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-11-21 16:00:05';
    this._versionBuild = 'jenkins-Bricolage-661';
    this._commitGIT = '0e1244584bfbc07c365a84c3ff35a0dbc6e13a38';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}