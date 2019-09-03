'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-09-03 16:00:05';
    this._versionBuild = 'jenkins-Bricolage-345';
    this._commitGIT = 'faf8ee03a89fe03d56e03a2cf2ef22c92acf11b9';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}