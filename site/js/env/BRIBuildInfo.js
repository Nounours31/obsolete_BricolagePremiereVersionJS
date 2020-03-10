'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-03-10 16:00:05';
    this._versionBuild = 'jenkins-Bricolage-1101';
    this._commitGIT = '69df8a0f2b6b1a8579771b88f058b0ddcf55d084';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}