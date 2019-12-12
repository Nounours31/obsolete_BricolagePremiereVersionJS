'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-12-12 16:00:05';
    this._versionBuild = 'jenkins-Bricolage-745';
    this._commitGIT = 'd971c9de0ecb10cf1e9a7d6785fb278992a188ed';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}