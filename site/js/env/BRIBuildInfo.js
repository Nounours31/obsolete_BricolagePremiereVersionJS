'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-11-23 16:00:05';
    this._versionBuild = 'jenkins-Bricolage-669';
    this._commitGIT = 'bb655fd4611f28f083486f75c2a9d81f9b0a09b2';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}