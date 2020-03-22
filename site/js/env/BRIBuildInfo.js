'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-03-22 16:00:06';
    this._versionBuild = 'jenkins-Bricolage-1149';
    this._commitGIT = '0d9219302cf2530b0094c47432e56d0b3a8574c1';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}