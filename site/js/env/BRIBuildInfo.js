'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-09-28 20:00:05';
    this._versionBuild = 'jenkins-Bricolage-446';
    this._commitGIT = 'e37f4777a647a38f86a28d5d21c4d1d1f5580b4c';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}