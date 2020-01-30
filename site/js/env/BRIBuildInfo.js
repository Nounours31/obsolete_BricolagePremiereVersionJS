'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-01-30 08:00:06';
    this._versionBuild = 'jenkins-Bricolage-939';
    this._commitGIT = '1888920f7e2d662333521de013f6e33453adddc3';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}