'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-11-13 12:00:07';
    this._versionBuild = 'jenkins-Bricolage-628';
    this._commitGIT = '7d08c4ae480ce0b6d7ae2e62fa1716ab1165c945';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}