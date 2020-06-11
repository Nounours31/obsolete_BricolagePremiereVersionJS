'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-06-11 12:00:09';
    this._versionBuild = 'jenkins-Bricolage-1472';
    this._commitGIT = 'b8600c5da492d1d0b37baba5e00e2be6a58dcbd5';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}