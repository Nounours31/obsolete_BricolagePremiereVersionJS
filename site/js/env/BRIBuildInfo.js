'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-08-08 16:00:06';
    this._versionBuild = 'jenkins-Bricolage-1705';
    this._commitGIT = 'dfe270e3c202d0f345b617dec7b924881e53daf6';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}