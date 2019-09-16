'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-09-16 12:00:05';
    this._versionBuild = 'jenkins-Bricolage-396';
    this._commitGIT = '4d9bc9c3c9d49f641fb6a83bc1c9f248333b24ac';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}