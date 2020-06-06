'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-06-06 16:00:07';
    this._versionBuild = 'jenkins-Bricolage-1453';
    this._commitGIT = '8f98bdf6c6853906db1f12ff42c0e4a6d188a346';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}