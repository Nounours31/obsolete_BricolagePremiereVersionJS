'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-12-11 12:00:05';
    this._versionBuild = 'jenkins-Bricolage-740';
    this._commitGIT = 'a75c254e04c9eacb7a37c60215c43987d77a557d';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}