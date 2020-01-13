'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-01-13 16:00:05';
    this._versionBuild = 'jenkins-Bricolage-873';
    this._commitGIT = '875e4706edac8e9ea0c3ada860af681c044b25be';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}