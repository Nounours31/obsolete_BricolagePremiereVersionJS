'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-12-18 12:00:06';
    this._versionBuild = 'jenkins-Bricolage-768';
    this._commitGIT = 'dc29e9e2ac36ba8fa2074d8eea1bd6a19094be39';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}