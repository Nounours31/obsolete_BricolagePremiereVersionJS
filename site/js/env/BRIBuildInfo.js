'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-03-07 20:00:05';
    this._versionBuild = 'jenkins-Bricolage-1090';
    this._commitGIT = 'bc15abdd75c05070c388e7c8186fb9d4e0bffe94';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}