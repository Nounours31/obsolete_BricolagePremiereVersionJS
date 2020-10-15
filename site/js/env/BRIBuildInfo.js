'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-10-15 12:00:08';
    this._versionBuild = 'jenkins-Bricolage-1976';
    this._commitGIT = '21ae6d4e07f6b0139c5fc30e0416ad8d9a62e2c4';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}