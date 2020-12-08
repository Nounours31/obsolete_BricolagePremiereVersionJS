'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-12-08 08:00:07';
    this._versionBuild = 'jenkins-Bricolage-2191';
    this._commitGIT = '5a31ecba8655be744dcc776745d482089f936bfa';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}