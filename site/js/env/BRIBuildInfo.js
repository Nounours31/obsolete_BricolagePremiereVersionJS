'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-07-12 16:00:13';
    this._versionBuild = 'jenkins-Bricolage-133';
    this._commitGIT = '100ede7c235aa9942f2b5da1f218b48712286360';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}