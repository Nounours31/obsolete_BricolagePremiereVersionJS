'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-07-12 11:11:18';
    this._versionBuild = 'jenkins-Bricolage-102';
    this._commitGIT = '52056cf27043c0ea39b923562295b514ffd2bfa3';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}