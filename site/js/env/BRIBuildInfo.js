'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-01-14 12:00:05';
    this._versionBuild = 'jenkins-Bricolage-876';
    this._commitGIT = 'f96aff91134b92eb180558c3ac7d4fd5044bced5';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}