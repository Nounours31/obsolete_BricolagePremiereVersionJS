'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-02-11 12:00:06';
    this._versionBuild = 'jenkins-Bricolage-988';
    this._commitGIT = '655900d3e23e1283de8a66d0ed34c517bba04a75';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}