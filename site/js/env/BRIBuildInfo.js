'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-12-21 12:00:05';
    this._versionBuild = 'jenkins-Bricolage-780';
    this._commitGIT = 'c036666d04df0a09f4e67b44cc98935605d4110d';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}