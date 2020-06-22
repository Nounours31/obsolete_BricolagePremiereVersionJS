'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-06-22 20:00:08';
    this._versionBuild = 'jenkins-Bricolage-1518';
    this._commitGIT = '0e394143579ce397a6d49a1b81f56a3737970b8b';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}