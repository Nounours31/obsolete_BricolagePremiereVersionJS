'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-08-31 16:00:04';
    this._versionBuild = 'jenkins-Bricolage-333';
    this._commitGIT = '6d278fcd92856e186753b96ce3e2da0946f4095b';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}