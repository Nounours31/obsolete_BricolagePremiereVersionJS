'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-08-28 12:00:05';
    this._versionBuild = 'jenkins-Bricolage-320';
    this._commitGIT = '79970e7a717050298212285960abbd248638f4f8';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}