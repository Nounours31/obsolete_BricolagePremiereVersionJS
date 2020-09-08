'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-09-08 16:00:08';
    this._versionBuild = 'jenkins-Bricolage-1829';
    this._commitGIT = '2e8c2781e6f2241038cc84566c2b6d9137afa66b';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}