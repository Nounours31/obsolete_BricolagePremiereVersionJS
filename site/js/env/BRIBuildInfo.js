'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-08-26 08:00:05';
    this._versionBuild = 'jenkins-Bricolage-311';
    this._commitGIT = 'f8d1979bc5b30b5fd9a385ff7bc54027e84b56ac';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}