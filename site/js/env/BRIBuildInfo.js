'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-01-31 20:00:06';
    this._versionBuild = 'jenkins-Bricolage-946';
    this._commitGIT = 'd4a21aed78649afa1a0286e4680b0cfa9ea44e80';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}