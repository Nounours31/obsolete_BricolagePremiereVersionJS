'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-08-27 20:00:07';
    this._versionBuild = 'jenkins-Bricolage-1782';
    this._commitGIT = '7393afa43d083bf3b09e7fc895282cb2e397b6dd';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}