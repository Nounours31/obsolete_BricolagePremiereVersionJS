'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-01-17 20:00:06';
    this._versionBuild = 'jenkins-Bricolage-890';
    this._commitGIT = 'ba2246d7ab4626103f4579e7b63444da875f6f40';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}