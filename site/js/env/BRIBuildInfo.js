'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-04-01 12:00:05';
    this._versionBuild = 'jenkins-Bricolage-1188';
    this._commitGIT = 'ab388f843eff3fbc427737cf7c13d3d3a8482958';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}