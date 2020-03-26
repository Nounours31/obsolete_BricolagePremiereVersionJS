'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-03-26 12:00:05';
    this._versionBuild = 'jenkins-Bricolage-1164';
    this._commitGIT = 'e8391099f5a65f4ff446a9920dd2481c0aad550b';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}