'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-07-12 11:33:07';
    this._versionBuild = 'jenkins-Bricolage-108';
    this._commitGIT = '2f8d6b0f2d0b07d890e667fd2dbfb176f0563c94';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}