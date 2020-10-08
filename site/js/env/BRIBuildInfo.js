'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-10-08 08:00:06';
    this._versionBuild = 'jenkins-Bricolage-1947';
    this._commitGIT = '072ecb7c527ec31c6a8b656cb5236051471daae3';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}