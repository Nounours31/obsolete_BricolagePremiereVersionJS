'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-08-21 08:00:05';
    this._versionBuild = 'jenkins-Bricolage-291';
    this._commitGIT = 'bd7bf0d2ec00d1c3b5d42181c99b782a7b4daa24';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}