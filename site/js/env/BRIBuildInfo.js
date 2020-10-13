'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-10-13 12:00:07';
    this._versionBuild = 'jenkins-Bricolage-1968';
    this._commitGIT = 'c022d2e2899badafd9466b64b1deab0bbda450cd';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}