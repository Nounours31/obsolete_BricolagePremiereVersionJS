'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-02-15 12:00:06';
    this._versionBuild = 'jenkins-Bricolage-1004';
    this._commitGIT = 'dc224a1ff443e432a64761f62717b0abc9f56b23';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}