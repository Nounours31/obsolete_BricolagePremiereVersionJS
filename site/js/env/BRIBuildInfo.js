'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-09-15 16:00:05';
    this._versionBuild = 'jenkins-Bricolage-393';
    this._commitGIT = 'e6a95da960fb28196d6c640125dd0c4a94723f62';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}