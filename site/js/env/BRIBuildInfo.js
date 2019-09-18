'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-09-18 16:00:06';
    this._versionBuild = 'jenkins-Bricolage-405';
    this._commitGIT = '8d4bcb42b042a9e02de69d407838ee9e3f14fe51';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}