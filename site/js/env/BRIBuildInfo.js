'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-09-23 20:00:05';
    this._versionBuild = 'jenkins-Bricolage-426';
    this._commitGIT = '8b4d1905c3dd362101348c7848a4c2de7af5936b';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}