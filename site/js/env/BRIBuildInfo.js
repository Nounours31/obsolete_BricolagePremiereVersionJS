'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-11-11 20:00:05';
    this._versionBuild = 'jenkins-Bricolage-622';
    this._commitGIT = 'e33f876d8a8c8f6a8042a25b941384eb00aa276e';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}