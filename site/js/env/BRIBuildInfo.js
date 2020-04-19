'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-04-19 16:00:05';
    this._versionBuild = 'jenkins-Bricolage-1261';
    this._commitGIT = '554038716a70b2d2608fabbb09936643d357d8ad';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}