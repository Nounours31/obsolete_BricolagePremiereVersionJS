'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-07-05 12:00:07';
    this._versionBuild = 'jenkins-Bricolage-1568';
    this._commitGIT = '893b50c5fbf06e5a5910f2c16f0f2b8be8a5fa19';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}