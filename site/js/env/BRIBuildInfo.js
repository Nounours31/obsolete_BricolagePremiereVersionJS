'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-11-07 16:00:05';
    this._versionBuild = 'jenkins-Bricolage-605';
    this._commitGIT = '3e6e84e18981975e61f11e41936bb63797bbaf3e';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}