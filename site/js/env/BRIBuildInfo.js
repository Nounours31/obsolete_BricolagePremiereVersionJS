'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-06-30 20:00:09';
    this._versionBuild = 'jenkins-Bricolage-1550';
    this._commitGIT = '8f01864e42d00e55880f695f87a9504f3551e11e';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}