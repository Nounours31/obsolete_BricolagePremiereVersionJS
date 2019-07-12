'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-07-12 11:12:28';
    this._versionBuild = 'jenkins-Bricolage-103';
    this._commitGIT = '252c450fbae979f52e57605862624b5ca120f095';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}