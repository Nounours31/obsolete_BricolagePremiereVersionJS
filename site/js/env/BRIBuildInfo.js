'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-07-31 20:00:07';
    this._versionBuild = 'jenkins-Bricolage-1674';
    this._commitGIT = 'b771a336a9c569fc726c2bf10c331bcbfe9df165';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}