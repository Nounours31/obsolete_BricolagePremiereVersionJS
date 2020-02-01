'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-02-01 08:00:05';
    this._versionBuild = 'jenkins-Bricolage-947';
    this._commitGIT = '0e4e49b73c29cd3e47c343b0707185b6045fdf7c';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}