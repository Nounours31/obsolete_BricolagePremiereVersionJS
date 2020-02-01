'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-02-01 16:00:05';
    this._versionBuild = 'jenkins-Bricolage-949';
    this._commitGIT = 'd4358e3ed3ec4a8459ee0c1be47f9c3ac3f5bd32';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}