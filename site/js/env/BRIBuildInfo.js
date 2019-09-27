'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-09-27 20:00:04';
    this._versionBuild = 'jenkins-Bricolage-442';
    this._commitGIT = '03b5f15578e7d96c0ca2997fb174c4079a0e2131';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}