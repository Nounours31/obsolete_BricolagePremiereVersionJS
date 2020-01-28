'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-01-28 20:00:06';
    this._versionBuild = 'jenkins-Bricolage-934';
    this._commitGIT = 'ed9d1fa4cf9efa7d62a748d3dcde17116ed04fe9';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}