'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-09-13 08:00:05';
    this._versionBuild = 'jenkins-Bricolage-383';
    this._commitGIT = '3f694bd3c18f08813cdd039dd336a31f7296f239';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}