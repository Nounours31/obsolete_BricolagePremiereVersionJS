'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-09-30 12:00:05';
    this._versionBuild = 'jenkins-Bricolage-452';
    this._commitGIT = '0f6e2eb794e7bc25ebc8c733a4dc8cf964cf420c';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}