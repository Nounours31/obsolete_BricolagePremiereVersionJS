'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-03-11 12:00:05';
    this._versionBuild = 'jenkins-Bricolage-1104';
    this._commitGIT = '56cb2e1f47b5ae80212d650be9a2d5de19aa3b5a';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}