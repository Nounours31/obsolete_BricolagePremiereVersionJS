'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-01-01 08:00:05';
    this._versionBuild = 'jenkins-Bricolage-823';
    this._commitGIT = '716a3d79f26f8a07b758e39f32ee3d0f7183d116';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}