'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-10-03 08:00:05';
    this._versionBuild = 'jenkins-Bricolage-463';
    this._commitGIT = 'b2b3d18484ed88022f49fc43eff653c3728832b6';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}