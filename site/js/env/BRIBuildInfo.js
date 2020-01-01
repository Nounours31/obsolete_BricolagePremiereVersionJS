'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-01-01 12:00:05';
    this._versionBuild = 'jenkins-Bricolage-824';
    this._commitGIT = '57e577ef767ad5fea6f774cd9830cba077cc4f8d';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}