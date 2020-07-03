'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-07-03 08:00:08';
    this._versionBuild = 'jenkins-Bricolage-1559';
    this._commitGIT = '60cb447422629e460417670391278eb1ee749f6e';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}