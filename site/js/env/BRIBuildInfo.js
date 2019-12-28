'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-12-28 12:00:05';
    this._versionBuild = 'jenkins-Bricolage-808';
    this._commitGIT = '1b7b44fa41692d4b1da40fdc8b2e15cca3e5c9fe';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}