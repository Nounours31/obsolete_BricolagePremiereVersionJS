'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-10-16 12:00:06';
    this._versionBuild = 'jenkins-Bricolage-516';
    this._commitGIT = '57e78a786c35a56c11887fbee2f6fb23444c6084';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}