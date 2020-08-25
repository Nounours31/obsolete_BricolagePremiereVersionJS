'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-08-25 20:00:06';
    this._versionBuild = 'jenkins-Bricolage-1774';
    this._commitGIT = '7637efa18c9bafa4deb5e15f41f947ff597866ed';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}