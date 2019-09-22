'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-09-22 12:00:04';
    this._versionBuild = 'jenkins-Bricolage-420';
    this._commitGIT = '71778acb9181f52458cd9e7d41f8d205b20071e6';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}