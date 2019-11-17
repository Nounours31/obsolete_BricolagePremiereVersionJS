'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-11-17 12:00:05';
    this._versionBuild = 'jenkins-Bricolage-644';
    this._commitGIT = 'c60e14e4ca3ac824d3d4f5b7e2536dc0a00dbfc1';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}