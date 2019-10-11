'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-10-11 16:00:05';
    this._versionBuild = 'jenkins-Bricolage-497';
    this._commitGIT = '98241a91660ea26bb35dd1908f7799f67d5f9519';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}