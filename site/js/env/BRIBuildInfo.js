'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-12-25 16:00:04';
    this._versionBuild = 'jenkins-Bricolage-797';
    this._commitGIT = '521b467d7b3327b4d16288d8985a5a7b7bbc2d5d';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}