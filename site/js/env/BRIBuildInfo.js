'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-12-06 16:00:06';
    this._versionBuild = 'jenkins-Bricolage-2185';
    this._commitGIT = '47b1ec5f0a55fbd0a5868ff54a55f0b92f44283d';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}