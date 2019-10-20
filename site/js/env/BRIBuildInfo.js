'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-10-20 20:00:05';
    this._versionBuild = 'jenkins-Bricolage-534';
    this._commitGIT = '4be928278a6fdc279d4dce2bd8646ac09f58b1cb';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}