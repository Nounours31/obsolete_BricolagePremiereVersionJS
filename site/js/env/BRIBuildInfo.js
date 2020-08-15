'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-08-15 08:00:07';
    this._versionBuild = 'jenkins-Bricolage-1731';
    this._commitGIT = '7f2ea50e7c2b1e9c5c11e78580c29a0e50dacfae';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}