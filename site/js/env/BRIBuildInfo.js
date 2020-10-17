'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-10-17 16:00:05';
    this._versionBuild = 'jenkins-Bricolage-1985';
    this._commitGIT = 'a0d002488dd0504c3c08159a48db9f02a68da4ad';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}