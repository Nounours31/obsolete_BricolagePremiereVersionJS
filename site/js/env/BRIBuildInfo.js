'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-10-08 12:00:05';
    this._versionBuild = 'jenkins-Bricolage-484';
    this._commitGIT = '73d8802af673a94d2c56facdddfa35093853249d';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}