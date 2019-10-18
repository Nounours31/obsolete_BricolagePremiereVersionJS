'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-10-18 16:00:05';
    this._versionBuild = 'jenkins-Bricolage-525';
    this._commitGIT = '6ab9fb5e6eb1540073f6abcdad504b0d4581d402';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}