'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-09-26 08:00:05';
    this._versionBuild = 'jenkins-Bricolage-1899';
    this._commitGIT = 'd5ca6533934fbe9c66a5365d0334ec23c21a828d';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}