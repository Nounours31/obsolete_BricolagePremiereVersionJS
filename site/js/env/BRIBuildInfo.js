'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-12-23 16:00:05';
    this._versionBuild = 'jenkins-Bricolage-789';
    this._commitGIT = 'a8c4b2ea20fba2e81224446eb397295c3ea0a31f';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}