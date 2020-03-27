'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-03-27 16:00:06';
    this._versionBuild = 'jenkins-Bricolage-1169';
    this._commitGIT = '04d07c0b6012f898ef7093a6e793f4a5b3fc3515';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}