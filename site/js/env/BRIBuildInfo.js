'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-12-22 08:00:06';
    this._versionBuild = 'jenkins-Bricolage-783';
    this._commitGIT = '09843e494e8e34a9d469071af78c9ad7b33c99d5';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}