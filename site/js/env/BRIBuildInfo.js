'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-12-15 16:00:05';
    this._versionBuild = 'jenkins-Bricolage-757';
    this._commitGIT = '2e06fb07d49494fb5affe87f67f821b253283eee';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}