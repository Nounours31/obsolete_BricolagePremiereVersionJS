'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-09-01 12:00:05';
    this._versionBuild = 'jenkins-Bricolage-336';
    this._commitGIT = 'da65f55c825240129a5f818b047863faee69ab9b';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}