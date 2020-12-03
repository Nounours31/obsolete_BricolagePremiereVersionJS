'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-12-03 12:00:08';
    this._versionBuild = 'jenkins-Bricolage-2172';
    this._commitGIT = 'e930d6fcb2c278c885497689e1fec1e2dac3a073';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}