'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-10-18 12:00:05';
    this._versionBuild = 'jenkins-Bricolage-1988';
    this._commitGIT = '211dafce1855dcd6fed49a2852cd73926d624beb';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}