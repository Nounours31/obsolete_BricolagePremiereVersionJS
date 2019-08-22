'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-08-22 20:00:05';
    this._versionBuild = 'jenkins-Bricolage-298';
    this._commitGIT = '0e443f55c122e31c629ee11c543c8525d5ff05df';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}