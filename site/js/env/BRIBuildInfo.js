'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-10-04 16:00:05';
    this._versionBuild = 'jenkins-Bricolage-469';
    this._commitGIT = 'f3787b6ddaaba8a3dd246817bedade51e9ff9d2e';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}