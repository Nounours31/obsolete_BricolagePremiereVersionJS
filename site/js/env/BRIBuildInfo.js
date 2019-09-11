'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-09-11 20:00:04';
    this._versionBuild = 'jenkins-Bricolage-378';
    this._commitGIT = '309c2805ab03bddbcf27c8843476eded6b2e549d';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}