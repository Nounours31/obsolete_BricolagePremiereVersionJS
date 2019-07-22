'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-07-22 16:00:15';
    this._versionBuild = 'jenkins-Bricolage-173';
    this._commitGIT = '7dc93e192be4b30f6d40885ce5b1f90d3c5e55ce';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}