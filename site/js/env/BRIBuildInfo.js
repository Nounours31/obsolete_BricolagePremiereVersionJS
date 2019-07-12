'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-07-12 11:18:06';
    this._versionBuild = 'jenkins-Bricolage-105';
    this._commitGIT = 'a8bd2712a5eaffcbf20b78fd6d0277ab90d4c572';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}