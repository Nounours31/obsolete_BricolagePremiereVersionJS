'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-09-14 12:00:07';
    this._versionBuild = 'jenkins-Bricolage-1852';
    this._commitGIT = '4e07b3b5d6211b1de552ca465b9c744d17c9f05e';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}