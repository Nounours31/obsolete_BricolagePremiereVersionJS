'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-01-08 08:00:04';
    this._versionBuild = 'jenkins-Bricolage-851';
    this._commitGIT = '153ccaee685c7cb4fc599ae7dc3b08a4f585c3b0';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}