'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-11-23 08:00:06';
    this._versionBuild = 'jenkins-Bricolage-667';
    this._commitGIT = 'b4f5e6833d4736bbe2df088a26c28409cfbee757';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}