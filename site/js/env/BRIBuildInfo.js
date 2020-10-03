'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-10-03 20:00:06';
    this._versionBuild = 'jenkins-Bricolage-1930';
    this._commitGIT = '318fde85a0eb90bb9359de6d2342cda6dff04730';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}