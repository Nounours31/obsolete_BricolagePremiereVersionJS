'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-05-22 16:00:07';
    this._versionBuild = 'jenkins-Bricolage-1393';
    this._commitGIT = '184e3a1aff62853f2c902854f6c5b4754ab81f2c';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}