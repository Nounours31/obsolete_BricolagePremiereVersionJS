'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-03-15 20:00:05';
    this._versionBuild = 'jenkins-Bricolage-1122';
    this._commitGIT = 'b6bb80c3040de40ea85b757a60ca3d98cf6981c8';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}