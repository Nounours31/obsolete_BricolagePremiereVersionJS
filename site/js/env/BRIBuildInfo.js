'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-03-31 08:00:05';
    this._versionBuild = 'jenkins-Bricolage-1183';
    this._commitGIT = 'ae072277e10d2147e3e19e4a72cdcf4d6ea1028a';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}