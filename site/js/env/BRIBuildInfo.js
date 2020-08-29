'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-08-29 16:00:05';
    this._versionBuild = 'jenkins-Bricolage-1789';
    this._commitGIT = '3eeac7285eb8d9b950a8130881c513d1babed238';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}