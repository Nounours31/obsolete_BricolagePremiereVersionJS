'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-07-19 16:00:15';
    this._versionBuild = 'jenkins-Bricolage-161';
    this._commitGIT = '52cfc116df1901e2acff18aedaed43b6a4369f8c';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}