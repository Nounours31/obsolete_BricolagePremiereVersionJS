'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-03-15 16:00:05';
    this._versionBuild = 'jenkins-Bricolage-1121';
    this._commitGIT = 'd0ff505df2a685961cc9e04411759c7d6a245736';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}