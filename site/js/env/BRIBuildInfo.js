'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-08-19 12:00:04';
    this._versionBuild = 'jenkins-Bricolage-284';
    this._commitGIT = 'f3a0a78bad5f5ab5202f7822d70aec81ff8e8c7b';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}