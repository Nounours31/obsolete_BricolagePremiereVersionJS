'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-10-20 16:00:05';
    this._versionBuild = 'jenkins-Bricolage-533';
    this._commitGIT = 'a5a0509e67dbac461072caedecb9d3b96150c4ce';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}