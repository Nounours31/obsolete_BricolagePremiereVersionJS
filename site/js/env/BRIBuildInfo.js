'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-04-09 16:00:05';
    this._versionBuild = 'jenkins-Bricolage-1221';
    this._commitGIT = 'bc556c7bb8b894c3220594bf195079e468c76ce9';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}