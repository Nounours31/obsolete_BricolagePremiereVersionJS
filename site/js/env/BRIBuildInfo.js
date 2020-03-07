'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-03-07 16:00:05';
    this._versionBuild = 'jenkins-Bricolage-1089';
    this._commitGIT = '330247cb2d5a6b615ca33c0d4b332019e8849dd2';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}