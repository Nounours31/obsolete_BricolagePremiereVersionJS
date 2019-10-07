'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-10-07 20:00:05';
    this._versionBuild = 'jenkins-Bricolage-482';
    this._commitGIT = '7d5ad8ee2a457e0dfcf8e462d244df246104c1e0';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}