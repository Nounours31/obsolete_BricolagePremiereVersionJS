'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-07-01 12:00:10';
    this._versionBuild = 'jenkins-Bricolage-1552';
    this._commitGIT = 'd4b56b25beb259f8b312cfbeed98fa45589a18ad';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}