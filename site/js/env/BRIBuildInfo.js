'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-01-15 16:00:06';
    this._versionBuild = 'jenkins-Bricolage-881';
    this._commitGIT = '7004e22085375350e0e589d91878fa5705837707';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}