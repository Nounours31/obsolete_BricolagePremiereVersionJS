'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-08-21 16:00:10';
    this._versionBuild = 'jenkins-Bricolage-1757';
    this._commitGIT = '95bc4f605bbd98770c9fd2ce8da6c761cbc1abc7';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}