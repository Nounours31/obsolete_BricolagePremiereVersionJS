'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-11-03 16:00:05';
    this._versionBuild = 'jenkins-Bricolage-589';
    this._commitGIT = '107d8c930f82fa0a87f954e776b88bcbf37c6cc7';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}