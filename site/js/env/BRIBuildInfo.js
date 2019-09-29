'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-09-29 20:00:05';
    this._versionBuild = 'jenkins-Bricolage-450';
    this._commitGIT = 'aa289b95e40d73b2e16b8ef168a0d250f4619ecd';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}