'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-07-01 20:00:08';
    this._versionBuild = 'jenkins-Bricolage-1554';
    this._commitGIT = 'd035bf0a32b05337f25b72ab50b9950741b112f1';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}