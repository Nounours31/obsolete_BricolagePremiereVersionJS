'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-05-25 20:00:07';
    this._versionBuild = 'jenkins-Bricolage-1406';
    this._commitGIT = '0430f244083e4b2e78d0575a0edea257fe853d05';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}