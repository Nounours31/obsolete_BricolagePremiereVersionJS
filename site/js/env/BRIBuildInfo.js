'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-11-14 16:00:06';
    this._versionBuild = 'jenkins-Bricolage-633';
    this._commitGIT = '1270714476e2be5fe52035bcb48ea4baa447f09a';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}