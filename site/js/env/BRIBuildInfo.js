'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-11-16 16:00:04';
    this._versionBuild = 'jenkins-Bricolage-641';
    this._commitGIT = '2e087581a7fce87a08fcd9be7ca83af58e7e3ab3';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}