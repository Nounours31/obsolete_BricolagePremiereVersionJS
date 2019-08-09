'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-08-09 12:00:15';
    this._versionBuild = 'jenkins-Bricolage-244';
    this._commitGIT = 'da5111266a0c4ccf4362c82d88523384d53de6cc';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}