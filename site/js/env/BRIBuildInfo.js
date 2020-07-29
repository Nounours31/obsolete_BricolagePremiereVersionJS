'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-07-29 08:00:10';
    this._versionBuild = 'jenkins-Bricolage-1663';
    this._commitGIT = 'd546451f49d21dbdcb7ecdf3fea6d48f79211544';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}