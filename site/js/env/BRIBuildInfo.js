'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-05-13 12:00:08';
    this._versionBuild = 'jenkins-Bricolage-1356';
    this._commitGIT = 'aed8c01c03935b5ce4909413ffaffd8567b9b25e';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}