'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-09-14 20:00:06';
    this._versionBuild = 'jenkins-Bricolage-1854';
    this._commitGIT = 'f1a60a1fcf9b804ae6f8f7b02360900be614a497';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}