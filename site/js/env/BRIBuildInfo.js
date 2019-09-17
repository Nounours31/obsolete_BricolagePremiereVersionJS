'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-09-17 16:00:05';
    this._versionBuild = 'jenkins-Bricolage-401';
    this._commitGIT = '6b8d03824e9a537528c7064794b49d5f2ecb85d8';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}