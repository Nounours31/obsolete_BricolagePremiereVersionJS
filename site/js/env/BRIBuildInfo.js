'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-09-05 08:00:05';
    this._versionBuild = 'jenkins-Bricolage-351';
    this._commitGIT = '60d801839e0f01c8b19fe4c7529c4d6d39953ccd';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}