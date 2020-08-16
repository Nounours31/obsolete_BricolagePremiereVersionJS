'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-08-16 16:00:08';
    this._versionBuild = 'jenkins-Bricolage-1737';
    this._commitGIT = 'e0ac69edbff5d6d9dae207298f0599eb64530d04';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}