'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-07-20 12:00:11';
    this._versionBuild = 'jenkins-Bricolage-164';
    this._commitGIT = '51b4a183b461b55e00a584e2d68d1e177613720f';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}