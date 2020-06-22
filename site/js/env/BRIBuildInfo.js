'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-06-22 08:00:08';
    this._versionBuild = 'jenkins-Bricolage-1515';
    this._commitGIT = '3e6924565df3be16428ffcd6627922562eea9701';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}