'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-07-29 16:00:13';
    this._versionBuild = 'jenkins-Bricolage-201';
    this._commitGIT = '427ef516ffcdfe9a8fa34a26b5dccab0cc4fe2f7';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}