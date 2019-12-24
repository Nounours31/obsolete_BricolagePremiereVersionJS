'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-12-24 20:00:05';
    this._versionBuild = 'jenkins-Bricolage-794';
    this._commitGIT = '54ee66fa11ff25607d2d008c2df30b509b5b0e4e';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}