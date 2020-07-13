'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-07-13 16:00:09';
    this._versionBuild = 'jenkins-Bricolage-1601';
    this._commitGIT = 'e461d559db585868e4fca4b1ddabaa1b8ac0a06c';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}