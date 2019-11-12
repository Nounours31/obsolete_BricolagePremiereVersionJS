'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-11-12 08:00:04';
    this._versionBuild = 'jenkins-Bricolage-623';
    this._commitGIT = '57d85a10e973caf39d4ef2746d2cfea358adba95';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}