'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-09-06 20:00:05';
    this._versionBuild = 'jenkins-Bricolage-1822';
    this._commitGIT = '517760c67b5a1ef23ef0f4786a171d0a1501d928';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}