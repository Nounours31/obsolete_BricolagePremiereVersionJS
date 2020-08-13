'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-08-13 20:00:08';
    this._versionBuild = 'jenkins-Bricolage-1726';
    this._commitGIT = '10d7ff1e4fe96fdee1d326dd2c010e71fbae5a98';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}