'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-11-30 08:00:05';
    this._versionBuild = 'jenkins-Bricolage-695';
    this._commitGIT = 'f77ee1fc5cd20e224be6f0282d967c8b50f6ab34';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}