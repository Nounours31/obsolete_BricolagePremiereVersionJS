'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-11-14 08:00:05';
    this._versionBuild = 'jenkins-Bricolage-631';
    this._commitGIT = 'd970b398d5e893e10564ddfcac48e441cae38a18';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}