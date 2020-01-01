'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-01-01 20:00:05';
    this._versionBuild = 'jenkins-Bricolage-826';
    this._commitGIT = 'c3947a8f6b78df50a0dc010c46cd353bfebb1e3c';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}