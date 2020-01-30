'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-01-30 12:00:07';
    this._versionBuild = 'jenkins-Bricolage-940';
    this._commitGIT = 'de52562a3eb22e007da44f7df3c9d7bfa9648644';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}