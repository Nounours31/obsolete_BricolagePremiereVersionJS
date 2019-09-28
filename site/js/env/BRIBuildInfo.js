'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-09-28 12:00:05';
    this._versionBuild = 'jenkins-Bricolage-444';
    this._commitGIT = 'ee25eb4d17ab4e66dc87c46969e26f444d4c6a9f';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}