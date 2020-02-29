'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-02-29 16:00:05';
    this._versionBuild = 'jenkins-Bricolage-1061';
    this._commitGIT = '2404add93dc04d0f00f32d44cb2c34b7de81f49a';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}