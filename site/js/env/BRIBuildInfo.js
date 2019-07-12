'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-07-12 13:10:02';
    this._versionBuild = 'jenkins-Bricolage-132';
    this._commitGIT = '571a2a7c1dd916d7a92ea545713e8c06124fd837';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}