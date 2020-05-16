'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-05-16 16:00:06';
    this._versionBuild = 'jenkins-Bricolage-1369';
    this._commitGIT = '452068b372bb4e25875b7d0978169b67d5254002';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}