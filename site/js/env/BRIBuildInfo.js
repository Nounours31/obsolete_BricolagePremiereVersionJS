'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-12-05 08:00:04';
    this._versionBuild = 'jenkins-Bricolage-715';
    this._commitGIT = '355ec33c338d3d6870841e8d5beba7b014e169e5';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}