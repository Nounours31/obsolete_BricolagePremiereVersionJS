'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-09-14 20:00:05';
    this._versionBuild = 'jenkins-Bricolage-390';
    this._commitGIT = 'd4e06ed453535cc054bf0463f176afa60ab857e9';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}