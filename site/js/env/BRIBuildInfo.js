'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-10-13 08:00:06';
    this._versionBuild = 'jenkins-Bricolage-1967';
    this._commitGIT = '9f1a6ce66a74d8559a3d9e0a0de6b150f81c6f73';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}