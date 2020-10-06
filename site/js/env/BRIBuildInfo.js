'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-10-06 16:00:08';
    this._versionBuild = 'jenkins-Bricolage-1941';
    this._commitGIT = '2c18054c3045b2c1388d02748f82dd04d44ff569';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}