'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-01-30 16:00:06';
    this._versionBuild = 'jenkins-Bricolage-941';
    this._commitGIT = '222513aaa9db1b3ef2d90675c657447683b3b0d5';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}