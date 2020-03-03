'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-03-03 08:00:06';
    this._versionBuild = 'jenkins-Bricolage-1071';
    this._commitGIT = 'bd619101ffd4635a4d4ca9744f97eaab2ebe22fa';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}