'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-03-01 16:00:05';
    this._versionBuild = 'jenkins-Bricolage-1065';
    this._commitGIT = '75624179136dcb800c7529b659d6af6221425122';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}