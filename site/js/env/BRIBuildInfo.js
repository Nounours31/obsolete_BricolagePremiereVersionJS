'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-09-12 16:00:05';
    this._versionBuild = 'jenkins-Bricolage-381';
    this._commitGIT = 'd4fe8467adbe45ac4dbcaa37c73bca142805e5fa';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}