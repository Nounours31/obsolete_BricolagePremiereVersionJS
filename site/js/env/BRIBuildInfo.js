'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-04-17 12:00:06';
    this._versionBuild = 'jenkins-Bricolage-1252';
    this._commitGIT = '3ecd2528570f4858dcc6d3c5dd448d5800061ec7';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}