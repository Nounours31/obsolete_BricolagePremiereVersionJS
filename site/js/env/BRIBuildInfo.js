'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-11-01 20:00:05';
    this._versionBuild = 'jenkins-Bricolage-582';
    this._commitGIT = '1bff7ff6484e0842e34892408472bf0af8f532ee';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}