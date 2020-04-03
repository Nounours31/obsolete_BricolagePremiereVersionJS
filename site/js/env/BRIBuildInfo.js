'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-04-03 16:00:05';
    this._versionBuild = 'jenkins-Bricolage-1197';
    this._commitGIT = 'af0e2c47f6ce09d9b81d40c7652d9d6c00885759';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}