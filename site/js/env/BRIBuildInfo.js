'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-11-25 12:00:05';
    this._versionBuild = 'jenkins-Bricolage-676';
    this._commitGIT = '7338341f0f3a31e97297ad09340a93dea899217a';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}