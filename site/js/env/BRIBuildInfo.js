'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-09-09 20:00:05';
    this._versionBuild = 'jenkins-Bricolage-1834';
    this._commitGIT = '2d0af0ad5a6637f48256674dc92bd851789ca2ef';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}