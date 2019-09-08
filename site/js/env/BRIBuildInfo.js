'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-09-08 16:00:04';
    this._versionBuild = 'jenkins-Bricolage-365';
    this._commitGIT = '4e73ad100c53f843c55a46aecacb4db2fa7e13bb';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}