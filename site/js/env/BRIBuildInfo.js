'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-12-11 20:00:06';
    this._versionBuild = 'jenkins-Bricolage-742';
    this._commitGIT = '4ac29282c8b7e999b5fb993f20b39146f972b930';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}