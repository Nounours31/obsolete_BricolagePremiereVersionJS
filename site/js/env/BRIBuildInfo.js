'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-11-11 12:00:05';
    this._versionBuild = 'jenkins-Bricolage-620';
    this._commitGIT = '447cd1296f40fc3154a9873d907df75e5417bbcc';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}