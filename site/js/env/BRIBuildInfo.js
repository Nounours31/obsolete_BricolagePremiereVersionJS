'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-08-06 12:00:10';
    this._versionBuild = 'jenkins-Bricolage-1696';
    this._commitGIT = '5411bf03043dbede4cf2f5666d524aed21d4922a';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}