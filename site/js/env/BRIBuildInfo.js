'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-06-25 20:00:10';
    this._versionBuild = 'jenkins-Bricolage-1530';
    this._commitGIT = 'd4b869363462cd2138fd82be1f4ecb1aad899499';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}