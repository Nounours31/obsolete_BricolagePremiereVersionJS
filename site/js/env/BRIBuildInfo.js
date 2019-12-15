'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-12-15 12:00:05';
    this._versionBuild = 'jenkins-Bricolage-756';
    this._commitGIT = 'a8ac8186fd69e4f76a3bffa0b9d0c20b132239cb';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}