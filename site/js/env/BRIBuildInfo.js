'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-10-01 12:00:05';
    this._versionBuild = 'jenkins-Bricolage-456';
    this._commitGIT = 'ff4eae3b5d44a2122928d0eebf075efc89478e0b';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}