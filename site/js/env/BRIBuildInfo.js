'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-11-06 08:00:07';
    this._versionBuild = 'jenkins-Bricolage-2063';
    this._commitGIT = '44f92e31b668187b8ed2509fd89fce3067e3bfe9';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}