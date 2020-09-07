'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-09-07 20:00:05';
    this._versionBuild = 'jenkins-Bricolage-1826';
    this._commitGIT = 'b154c57311762d864c3a441c6a36ca4c73811fb3';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}