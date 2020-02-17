'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-02-17 08:00:06';
    this._versionBuild = 'jenkins-Bricolage-1011';
    this._commitGIT = '517f73cdeb34eb49daa7ca945ed56330f24d4222';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}