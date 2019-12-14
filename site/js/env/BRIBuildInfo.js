'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-12-14 08:00:04';
    this._versionBuild = 'jenkins-Bricolage-751';
    this._commitGIT = 'd568ef0b16819135093953483eb953b02b16801f';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}