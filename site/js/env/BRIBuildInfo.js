'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-12-19 12:00:05';
    this._versionBuild = 'jenkins-Bricolage-772';
    this._commitGIT = '1134ae6824f3cdce098831cb9838780971875dd8';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}