'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-05-17 20:00:06';
    this._versionBuild = 'jenkins-Bricolage-1374';
    this._commitGIT = '2e1e7f10debe53520372d514fa6e9e53b68047e8';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}