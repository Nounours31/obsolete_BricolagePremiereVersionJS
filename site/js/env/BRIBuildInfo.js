'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-03-23 20:00:05';
    this._versionBuild = 'jenkins-Bricolage-1154';
    this._commitGIT = '3d8ef8bc9e7b52a0f948b15a55cbc9f8ecca5a1f';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}