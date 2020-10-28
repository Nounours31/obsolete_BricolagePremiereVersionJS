'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-10-28 16:00:08';
    this._versionBuild = 'jenkins-Bricolage-2029';
    this._commitGIT = 'ae25b0e6bd8359e35a2d36bc3866e0985014c407';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}