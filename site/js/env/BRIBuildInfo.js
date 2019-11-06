'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-11-06 20:00:05';
    this._versionBuild = 'jenkins-Bricolage-602';
    this._commitGIT = 'b894462eccbfea8c8ac37c55a3da94d76c8fd6e3';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}