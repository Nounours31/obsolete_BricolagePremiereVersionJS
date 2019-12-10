'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-12-10 16:00:05';
    this._versionBuild = 'jenkins-Bricolage-737';
    this._commitGIT = 'b2b25c5d86179e1217b26ff6468b4e39c5db3ead';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}