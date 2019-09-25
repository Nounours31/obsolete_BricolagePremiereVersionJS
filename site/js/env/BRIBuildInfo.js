'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-09-25 12:00:05';
    this._versionBuild = 'jenkins-Bricolage-432';
    this._commitGIT = 'ab0da61d5da350dafca4a34c0873849e2ef6c059';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}