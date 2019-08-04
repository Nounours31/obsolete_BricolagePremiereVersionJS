'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-08-04 20:00:13';
    this._versionBuild = 'jenkins-Bricolage-226';
    this._commitGIT = '6b8551d813e46f785ef2adf294d60447d986d1d4';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}