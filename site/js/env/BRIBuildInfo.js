'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-12-06 12:00:05';
    this._versionBuild = 'jenkins-Bricolage-720';
    this._commitGIT = '0b6f2cd288a91993ec40f6b4cdf6347e0f929976';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}