'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-06-18 16:00:12';
    this._versionBuild = 'jenkins-Bricolage-1501';
    this._commitGIT = '86b3cfa0f332f04ca1abed5e52d98753450d07a4';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}