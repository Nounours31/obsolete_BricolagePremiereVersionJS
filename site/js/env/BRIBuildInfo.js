'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-01-10 08:00:05';
    this._versionBuild = 'jenkins-Bricolage-859';
    this._commitGIT = 'a5baef2ceebdd5b1d3d955244ad426d47b25934b';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}