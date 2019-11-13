'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-11-13 16:00:05';
    this._versionBuild = 'jenkins-Bricolage-629';
    this._commitGIT = '95afced53e9786584db0e64a2b5570ed9d7afb87';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}