'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-08-19 08:00:06';
    this._versionBuild = 'jenkins-Bricolage-1747';
    this._commitGIT = '9f5f66b84b56f723c41acd83e84909444d948eb5';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}