'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-07-26 16:00:17';
    this._versionBuild = 'jenkins-Bricolage-189';
    this._commitGIT = 'ffd7b4523b5fe38a403c1e6d8cedd9d0be570af9';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}