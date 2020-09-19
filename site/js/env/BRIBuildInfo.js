'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-09-19 20:00:05';
    this._versionBuild = 'jenkins-Bricolage-1874';
    this._commitGIT = '2baa733cd34c49573cf8fecc6d0b9d5cf8cc0717';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}