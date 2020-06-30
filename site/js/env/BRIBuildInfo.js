'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-06-30 16:00:12';
    this._versionBuild = 'jenkins-Bricolage-1549';
    this._commitGIT = 'fcebacb267586f1d6ac0103d0ab7d408609d76a5';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}