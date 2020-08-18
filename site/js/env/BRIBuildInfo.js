'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-08-18 12:00:09';
    this._versionBuild = 'jenkins-Bricolage-1744';
    this._commitGIT = 'ef554e29b1cb5f2a187cf7bfcfc4c871031fb409';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}