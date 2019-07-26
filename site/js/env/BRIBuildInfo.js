'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-07-26 12:00:13';
    this._versionBuild = 'jenkins-Bricolage-188';
    this._commitGIT = 'c4b22a9d22ed0e6e7cecfd4a671e44e202e0f61c';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}