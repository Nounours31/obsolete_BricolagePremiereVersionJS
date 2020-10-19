'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-10-19 20:00:08';
    this._versionBuild = 'jenkins-Bricolage-1994';
    this._commitGIT = '547d74a3df799f830bed317bd9907e59ea3a7f55';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}