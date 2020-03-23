'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-03-23 16:00:05';
    this._versionBuild = 'jenkins-Bricolage-1153';
    this._commitGIT = '97115c83b138e6c169f7b7e7ab50dd6d3dc1e2ba';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}