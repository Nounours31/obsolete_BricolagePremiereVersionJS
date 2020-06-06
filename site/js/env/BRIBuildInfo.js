'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-06-06 08:00:08';
    this._versionBuild = 'jenkins-Bricolage-1451';
    this._commitGIT = 'c4d8366954bb0756aa4013c8b12b27aade09f569';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}