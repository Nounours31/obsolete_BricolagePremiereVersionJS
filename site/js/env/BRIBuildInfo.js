'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-03-06 12:00:06';
    this._versionBuild = 'jenkins-Bricolage-1084';
    this._commitGIT = '7b0c0a9e40a1a38da57b437e53997440e7e4c3d3';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}