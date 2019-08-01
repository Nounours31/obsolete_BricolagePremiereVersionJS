'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-08-01 12:00:16';
    this._versionBuild = 'jenkins-Bricolage-212';
    this._commitGIT = '125d32ae8c77b6be00eb22cc8c210b09a21236fb';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}