'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-07-30 08:00:14';
    this._versionBuild = 'jenkins-Bricolage-203';
    this._commitGIT = '5d37d31c5e43d2a58803209a5d46e9f63cc287f3';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}