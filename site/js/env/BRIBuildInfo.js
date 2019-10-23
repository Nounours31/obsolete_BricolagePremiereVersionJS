'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-10-23 20:00:05';
    this._versionBuild = 'jenkins-Bricolage-546';
    this._commitGIT = '11ff0f2512ab39e632e57d91f2263698d56a71c8';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}