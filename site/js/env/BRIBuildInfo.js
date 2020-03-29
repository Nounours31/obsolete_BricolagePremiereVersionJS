'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-03-29 16:00:05';
    this._versionBuild = 'jenkins-Bricolage-1177';
    this._commitGIT = '01f00e644c78446070fa396d3feba7198c0c64e9';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}