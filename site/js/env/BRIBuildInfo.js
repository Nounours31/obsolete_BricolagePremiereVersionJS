'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-07-28 16:00:11';
    this._versionBuild = 'jenkins-Bricolage-197';
    this._commitGIT = '91077391e092efcc5ce18d1acab4d76a0a31f8d8';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}