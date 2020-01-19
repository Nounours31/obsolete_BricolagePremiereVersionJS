'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-01-19 12:00:06';
    this._versionBuild = 'jenkins-Bricolage-896';
    this._commitGIT = '4f182e75bfc04c4ed820a5d65bc10dc2285c31cd';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}