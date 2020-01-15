'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-01-15 12:00:05';
    this._versionBuild = 'jenkins-Bricolage-880';
    this._commitGIT = '8588f78b45e0e0e612f192b21d3d480509c1cabc';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}