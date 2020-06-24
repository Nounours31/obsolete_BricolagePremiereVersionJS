'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-06-24 20:00:09';
    this._versionBuild = 'jenkins-Bricolage-1526';
    this._commitGIT = '34ae9377062c63dc023624431e33bd9770a218cf';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}