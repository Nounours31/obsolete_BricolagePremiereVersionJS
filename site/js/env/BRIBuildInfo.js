'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-05-13 08:00:07';
    this._versionBuild = 'jenkins-Bricolage-1355';
    this._commitGIT = 'e3cbb7ae5936b5a9713236ec3ddd2c1afe758c94';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}