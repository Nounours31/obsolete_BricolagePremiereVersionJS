'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-07-31 08:00:13';
    this._versionBuild = 'jenkins-Bricolage-207';
    this._commitGIT = 'c21c6812df6819c5fe33166982bdc2c0b8ec4650';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}