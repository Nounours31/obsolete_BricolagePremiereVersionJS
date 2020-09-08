'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-09-08 12:00:07';
    this._versionBuild = 'jenkins-Bricolage-1828';
    this._commitGIT = 'd0d5dae13ad53cdde09fdfe2e2c81dd099303121';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}