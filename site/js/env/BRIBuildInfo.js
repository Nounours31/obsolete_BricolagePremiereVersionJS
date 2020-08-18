'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-08-18 08:00:08';
    this._versionBuild = 'jenkins-Bricolage-1743';
    this._commitGIT = 'c8f439ce4f489fcdd18e56b45c19124ecd661e19';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}