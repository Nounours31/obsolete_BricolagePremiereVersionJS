'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-02-09 12:00:05';
    this._versionBuild = 'jenkins-Bricolage-980';
    this._commitGIT = '1e004bf04b61a8e9101d6e11cc06b86d6aa5edfc';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}