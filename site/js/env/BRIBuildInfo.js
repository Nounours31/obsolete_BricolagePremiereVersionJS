'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-09-03 08:00:05';
    this._versionBuild = 'jenkins-Bricolage-343';
    this._commitGIT = 'a2511e2e75efad912bfa3d56fd7d43886d122486';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}