'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-11-21 20:00:05';
    this._versionBuild = 'jenkins-Bricolage-662';
    this._commitGIT = '493f477fbcb8e7d5b8fe9955796b0b8a02337780';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}