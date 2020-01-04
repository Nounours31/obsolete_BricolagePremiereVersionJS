'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-01-04 16:00:05';
    this._versionBuild = 'jenkins-Bricolage-837';
    this._commitGIT = 'b9e62e68578a7eeda72d5315ff5bce7fc62c216d';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}