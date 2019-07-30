'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-07-30 12:00:15';
    this._versionBuild = 'jenkins-Bricolage-204';
    this._commitGIT = 'b0fe81fc92de6a2c621b3dfcd0c7279326695565';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}