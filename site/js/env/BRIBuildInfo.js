'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-07-27 16:00:12';
    this._versionBuild = 'jenkins-Bricolage-1657';
    this._commitGIT = '39dc3b94e646b6512b628ca39282b2be88d14ec8';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}