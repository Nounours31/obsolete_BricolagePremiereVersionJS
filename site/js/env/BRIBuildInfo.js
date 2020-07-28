'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-07-28 20:00:08';
    this._versionBuild = 'jenkins-Bricolage-1662';
    this._commitGIT = '72200160889b3ced2c57e1d6d310d4d88fc05cfd';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}