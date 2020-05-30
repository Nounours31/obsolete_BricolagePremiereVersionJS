'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-05-30 16:00:06';
    this._versionBuild = 'jenkins-Bricolage-1425';
    this._commitGIT = '8a09e62659b657cbe8b24f6d17f3b51819c1e341';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}