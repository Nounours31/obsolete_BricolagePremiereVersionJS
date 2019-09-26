'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-09-26 08:00:05';
    this._versionBuild = 'jenkins-Bricolage-435';
    this._commitGIT = '0186c4f3d5d1eae5cade3e5e07c0cff815f00d4d';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}