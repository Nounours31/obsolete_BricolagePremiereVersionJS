'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-08-07 16:00:10';
    this._versionBuild = 'jenkins-Bricolage-1701';
    this._commitGIT = '84d4e43c546b8ee76d84f206b0444b0376b26a61';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}