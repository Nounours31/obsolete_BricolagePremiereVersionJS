'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-09-24 12:00:05';
    this._versionBuild = 'jenkins-Bricolage-428';
    this._commitGIT = '4f0b5bfaec2fe1510bc5887cf451f8710969e86d';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}