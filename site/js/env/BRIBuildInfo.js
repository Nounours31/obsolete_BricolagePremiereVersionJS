'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-01-25 08:00:06';
    this._versionBuild = 'jenkins-Bricolage-919';
    this._commitGIT = '7225773e6457d3617f85b4e6603619f1c43964dd';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}