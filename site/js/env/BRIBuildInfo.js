'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-06-07 20:00:06';
    this._versionBuild = 'jenkins-Bricolage-1458';
    this._commitGIT = 'd331046521e2a93763e2b6241719b2fa8ac18257';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}