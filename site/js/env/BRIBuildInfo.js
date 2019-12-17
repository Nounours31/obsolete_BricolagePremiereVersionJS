'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-12-17 08:00:05';
    this._versionBuild = 'jenkins-Bricolage-763';
    this._commitGIT = 'e6b6a546c66a0d987bf53697bc15996cba498d8e';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}