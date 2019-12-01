'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-12-01 12:00:05';
    this._versionBuild = 'jenkins-Bricolage-700';
    this._commitGIT = '89166bdd9e0c4055ef7b1c36b8fc7ed10ea3ed88';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}