'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-07-20 12:00:08';
    this._versionBuild = 'jenkins-Bricolage-1628';
    this._commitGIT = 'fcaef1c2d38a2e5dc575ba192d135c2e85375031';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}