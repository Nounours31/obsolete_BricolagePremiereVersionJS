'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-03-29 08:00:06';
    this._versionBuild = 'jenkins-Bricolage-1175';
    this._commitGIT = 'f91d5063e8cab69c3861d67677109ad799efa97f';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}