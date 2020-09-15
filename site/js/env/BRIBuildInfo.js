'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-09-15 16:00:06';
    this._versionBuild = 'jenkins-Bricolage-1857';
    this._commitGIT = '438aee59a1db3f44904ab486f1b2aa8878854beb';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}