'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-08-22 16:00:08';
    this._versionBuild = 'jenkins-Bricolage-1761';
    this._commitGIT = '641a016011e446fcdf6f82a72b6fa5a4e5da657e';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}