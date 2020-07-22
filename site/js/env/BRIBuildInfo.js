'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-07-22 08:00:08';
    this._versionBuild = 'jenkins-Bricolage-1635';
    this._commitGIT = '9b2384ce181d1df4f96f8e17472a0230728e8d38';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}