'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-09-23 20:00:06';
    this._versionBuild = 'jenkins-Bricolage-1890';
    this._commitGIT = '8633bc90f5e91cd8faf99a7e2aa3b5e423c717d4';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}