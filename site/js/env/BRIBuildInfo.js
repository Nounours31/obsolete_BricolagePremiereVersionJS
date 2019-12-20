'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-12-20 12:00:05';
    this._versionBuild = 'jenkins-Bricolage-776';
    this._commitGIT = 'a336f5d3457e1b0fd4bd63603645fd7d79792486';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}