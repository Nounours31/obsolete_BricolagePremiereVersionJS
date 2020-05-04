'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-05-04 20:00:08';
    this._versionBuild = 'jenkins-Bricolage-1322';
    this._commitGIT = 'd259e18e3495a6c4272f2d690b9b6146f534a737';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}