'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-10-23 12:00:05';
    this._versionBuild = 'jenkins-Bricolage-544';
    this._commitGIT = 'c26a144c8e9d0f7d074db15176bed5990dbcc43d';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}