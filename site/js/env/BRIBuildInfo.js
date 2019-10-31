'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-10-31 08:00:05';
    this._versionBuild = 'jenkins-Bricolage-575';
    this._commitGIT = 'd2a0ca519f842558bb597d1dbbfae2e23c64d10e';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}