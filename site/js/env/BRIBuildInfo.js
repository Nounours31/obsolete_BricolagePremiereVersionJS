'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-02-29 12:00:05';
    this._versionBuild = 'jenkins-Bricolage-1060';
    this._commitGIT = '412f3cca96a0ac6a080e4e8ec8b22e4a1942bccc';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}