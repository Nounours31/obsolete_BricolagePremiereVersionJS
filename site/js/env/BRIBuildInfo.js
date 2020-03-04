'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-03-04 12:00:07';
    this._versionBuild = 'jenkins-Bricolage-1076';
    this._commitGIT = 'dc3fba548d31af2f0044d0bbf2d23a185abb6450';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}