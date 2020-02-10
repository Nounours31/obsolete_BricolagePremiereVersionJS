'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-02-10 16:00:07';
    this._versionBuild = 'jenkins-Bricolage-985';
    this._commitGIT = '1d5a72dc80b9de6e2caa4a5713f364764e0ff9d2';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}