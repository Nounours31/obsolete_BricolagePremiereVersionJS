'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-03-29 20:00:05';
    this._versionBuild = 'jenkins-Bricolage-1178';
    this._commitGIT = 'e7c9d8c7e9e7188563e0167957503a7bb460a367';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}