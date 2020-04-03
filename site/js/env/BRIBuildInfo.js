'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-04-03 08:00:05';
    this._versionBuild = 'jenkins-Bricolage-1195';
    this._commitGIT = '2ddc29d63515b1b31bcef9a2e3b45df5d93e11d9';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}