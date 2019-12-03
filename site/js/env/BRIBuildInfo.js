'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-12-03 16:00:05';
    this._versionBuild = 'jenkins-Bricolage-709';
    this._commitGIT = '06b722345252614d657591c2097d90e43e2e8ebb';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}