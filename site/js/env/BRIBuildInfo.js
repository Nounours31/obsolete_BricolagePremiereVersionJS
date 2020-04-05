'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-04-05 20:00:04';
    this._versionBuild = 'jenkins-Bricolage-1206';
    this._commitGIT = '04bf981ae82cb3e4ca28214da2383abf190eb116';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}