'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-12-09 12:00:05';
    this._versionBuild = 'jenkins-Bricolage-732';
    this._commitGIT = '2f193ec5c193d3075abd3b5a7e409eed71782bbf';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}