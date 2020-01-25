'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-01-25 12:00:06';
    this._versionBuild = 'jenkins-Bricolage-920';
    this._commitGIT = '0d03b1ebd3728e47cf441ba194b473c9290434c5';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}