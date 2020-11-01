'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-11-01 16:00:05';
    this._versionBuild = 'jenkins-Bricolage-2045';
    this._commitGIT = 'f2d73a7eaa102864c537765ea74eee2ffb26902c';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}