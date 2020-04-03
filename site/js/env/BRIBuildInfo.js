'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-04-03 20:00:05';
    this._versionBuild = 'jenkins-Bricolage-1198';
    this._commitGIT = 'be0d30e057f488b95c0295c58c0d622b9c200023';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}