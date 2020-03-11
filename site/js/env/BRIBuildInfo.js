'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-03-11 16:00:06';
    this._versionBuild = 'jenkins-Bricolage-1105';
    this._commitGIT = 'e573a1ab9e4f46167461b40802d296eced8d988a';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}