'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-12-08 12:00:05';
    this._versionBuild = 'jenkins-Bricolage-728';
    this._commitGIT = '698c1e12e1d09673c9cb568e690552c1d19300f2';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}