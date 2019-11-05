'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-11-05 12:00:06';
    this._versionBuild = 'jenkins-Bricolage-596';
    this._commitGIT = 'bb1830dcd8cfd0b038625c5300025a38cafd495b';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}