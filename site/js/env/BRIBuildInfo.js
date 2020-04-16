'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-04-16 12:00:05';
    this._versionBuild = 'jenkins-Bricolage-1248';
    this._commitGIT = '750d3f8551d519e8da5c0b36ffa75c1a30d77b99';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}