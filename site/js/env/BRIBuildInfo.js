'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-07-12 11:48:07';
    this._versionBuild = 'jenkins-Bricolage-111';
    this._commitGIT = 'f7977ade56a5e8bcb6a1bd9e8177ca2cee2d8eb4';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}