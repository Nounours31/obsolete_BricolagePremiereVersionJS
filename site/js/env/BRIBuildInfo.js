'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-09-13 12:00:05';
    this._versionBuild = 'jenkins-Bricolage-384';
    this._commitGIT = '1496d88227a4ba99dcdc4b5e2ae4c0e242b3c015';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}