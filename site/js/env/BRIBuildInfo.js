'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-11-26 12:00:07';
    this._versionBuild = 'jenkins-Bricolage-2144';
    this._commitGIT = '73cd2d3ad13f0c1c9a5770518ad04a15ce07b316';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}