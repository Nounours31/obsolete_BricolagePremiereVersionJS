'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-12-22 16:00:05';
    this._versionBuild = 'jenkins-Bricolage-785';
    this._commitGIT = '8a2d20847ea13ba66ce692c127f5d32f3517b25d';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}