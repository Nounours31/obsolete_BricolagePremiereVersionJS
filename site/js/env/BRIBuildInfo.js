'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-10-31 16:00:05';
    this._versionBuild = 'jenkins-Bricolage-2041';
    this._commitGIT = '22c9d4d0f1f88acae81c2e91e1fcf0124500412e';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}