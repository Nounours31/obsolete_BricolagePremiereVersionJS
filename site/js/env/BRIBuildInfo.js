'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-09-03 20:00:05';
    this._versionBuild = 'jenkins-Bricolage-346';
    this._commitGIT = '2e56f6fcd651b5c448497c677b155e8f8b59d1ed';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}