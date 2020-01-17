'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-01-17 08:00:05';
    this._versionBuild = 'jenkins-Bricolage-887';
    this._commitGIT = '8e0fd3d7c17707e8ded7af2f590bc1278bebfc80';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}