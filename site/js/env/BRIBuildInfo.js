'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-10-03 12:00:05';
    this._versionBuild = 'jenkins-Bricolage-464';
    this._commitGIT = '7e677a930346de0b0b6ea0facc5e5d8781d7cc00';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}