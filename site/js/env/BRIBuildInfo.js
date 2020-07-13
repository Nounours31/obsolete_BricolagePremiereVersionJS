'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-07-13 08:00:07';
    this._versionBuild = 'jenkins-Bricolage-1599';
    this._commitGIT = '0b64b9cde913d67565d7211ac0d66c5dfbe87228';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}