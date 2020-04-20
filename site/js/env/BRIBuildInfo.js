'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-04-20 20:00:06';
    this._versionBuild = 'jenkins-Bricolage-1266';
    this._commitGIT = 'ea768a4c7b954d322028eb9173d22fd7ca5de71a';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}