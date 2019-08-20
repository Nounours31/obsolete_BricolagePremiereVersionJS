'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-08-20 12:00:07';
    this._versionBuild = 'jenkins-Bricolage-288';
    this._commitGIT = '856588471331616f86a29035dfcb5947a45f6ff7';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}