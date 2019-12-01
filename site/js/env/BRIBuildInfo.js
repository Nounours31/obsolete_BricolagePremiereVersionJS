'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-12-01 20:00:06';
    this._versionBuild = 'jenkins-Bricolage-702';
    this._commitGIT = '6bdba6ebd1a6d2e757f01755dadc3d9a2e11ae38';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}