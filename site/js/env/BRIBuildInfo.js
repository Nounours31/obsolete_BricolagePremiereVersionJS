'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-11-22 12:00:06';
    this._versionBuild = 'jenkins-Bricolage-664';
    this._commitGIT = 'd4cda345409a2d22a7d7b69c2fa6f68a9d0e9219';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}