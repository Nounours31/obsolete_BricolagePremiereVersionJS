'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-03-18 12:00:05';
    this._versionBuild = 'jenkins-Bricolage-1132';
    this._commitGIT = 'dde4cefa37df44a74329b7bdd65e6e352d0ab116';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}