'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-01-31 16:00:06';
    this._versionBuild = 'jenkins-Bricolage-945';
    this._commitGIT = 'dd5fa0a3e4a004cefec8f3e79ed93b81ac22c390';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}