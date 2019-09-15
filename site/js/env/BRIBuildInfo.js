'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-09-15 12:00:05';
    this._versionBuild = 'jenkins-Bricolage-392';
    this._commitGIT = 'c9fff6ad7413c64d98bbe673c26488075506249c';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}