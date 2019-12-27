'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-12-27 16:00:05';
    this._versionBuild = 'jenkins-Bricolage-805';
    this._commitGIT = '16dd998be3df28469e8680c7dd1550e04473698c';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}