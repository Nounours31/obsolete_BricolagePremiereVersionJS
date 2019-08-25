'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-08-25 20:00:04';
    this._versionBuild = 'jenkins-Bricolage-310';
    this._commitGIT = 'dbd0f2c7bd32d141f82879c34c584945c06902aa';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}