'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-11-04 12:00:06';
    this._versionBuild = 'jenkins-Bricolage-592';
    this._commitGIT = '8654129f26fe7ee285c9115dd43a3f14e6a29f86';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}