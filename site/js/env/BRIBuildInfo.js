'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-11-17 20:00:08';
    this._versionBuild = 'jenkins-Bricolage-2110';
    this._commitGIT = 'a053a92b6f8c09e4607f5f3f555fdb0f41811ce5';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}