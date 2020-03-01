'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-03-01 20:00:05';
    this._versionBuild = 'jenkins-Bricolage-1066';
    this._commitGIT = '245ca2b0476853ba1f1bc7deae4d92e05af0089b';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}