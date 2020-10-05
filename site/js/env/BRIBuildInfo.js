'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-10-05 08:00:07';
    this._versionBuild = 'jenkins-Bricolage-1935';
    this._commitGIT = '475188ff0bfbcb4db02c4d9cac675c8c8a7b2638';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}