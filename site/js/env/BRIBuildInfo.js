'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-08-29 12:00:05';
    this._versionBuild = 'jenkins-Bricolage-1788';
    this._commitGIT = 'c14b76479c44fe6f64d3b3925d9f561a80e5eff6';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}