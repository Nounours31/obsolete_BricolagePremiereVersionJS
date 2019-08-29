'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-08-29 12:00:05';
    this._versionBuild = 'jenkins-Bricolage-324';
    this._commitGIT = 'd5a647d80a1d4d49ac0c0ac448a9472938252af8';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}