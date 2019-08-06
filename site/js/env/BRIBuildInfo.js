'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-08-06 20:00:14';
    this._versionBuild = 'jenkins-Bricolage-234';
    this._commitGIT = '3f3f1da7abdaa67b87200642f6991d869e63e626';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}