'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-05-18 20:00:07';
    this._versionBuild = 'jenkins-Bricolage-1378';
    this._commitGIT = 'b04a55404aa9c5239f2b331af3ff941dc6c80afa';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}