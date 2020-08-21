'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-08-21 08:00:08';
    this._versionBuild = 'jenkins-Bricolage-1755';
    this._commitGIT = 'bf1d3ccd64e11f7bb1f409f92d4879ed13fc90d5';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}