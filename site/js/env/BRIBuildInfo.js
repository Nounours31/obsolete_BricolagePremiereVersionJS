'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-03-07 12:00:05';
    this._versionBuild = 'jenkins-Bricolage-1088';
    this._commitGIT = '2054e4261e22f2b4afa35bb7c6f0bd1b0e994c06';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}