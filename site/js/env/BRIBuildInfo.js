'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-07-18 20:00:12';
    this._versionBuild = 'jenkins-Bricolage-158';
    this._commitGIT = 'de4538f21a14b5de075d56a14d8c86cb22991393';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}