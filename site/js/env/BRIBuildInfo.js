'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-07-22 20:00:13';
    this._versionBuild = 'jenkins-Bricolage-174';
    this._commitGIT = '54a06e4b9bc870064c50a8e0b60563a90c1c7c12';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}