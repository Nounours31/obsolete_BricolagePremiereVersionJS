'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-07-18 12:00:12';
    this._versionBuild = 'jenkins-Bricolage-156';
    this._commitGIT = '471a8c5525c90151cf6194a71f271d1602d1b758';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}