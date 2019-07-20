'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-07-20 20:00:10';
    this._versionBuild = 'jenkins-Bricolage-166';
    this._commitGIT = '0b9eb2e4ae4769d68cc755ed5b7fbd8bb04b21ca';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}