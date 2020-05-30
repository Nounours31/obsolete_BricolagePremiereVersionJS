'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-05-30 20:00:06';
    this._versionBuild = 'jenkins-Bricolage-1426';
    this._commitGIT = 'b0023f54b83cabbd44cc0e949efb0faa17e527fc';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}