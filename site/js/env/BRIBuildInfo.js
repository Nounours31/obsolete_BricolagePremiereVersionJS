'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-08-01 12:00:08';
    this._versionBuild = 'jenkins-Bricolage-1676';
    this._commitGIT = '585f15f8fc0507d1d841a20a6c6e2aa5dc319c01';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}