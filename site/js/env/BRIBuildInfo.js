'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-01-29 20:00:07';
    this._versionBuild = 'jenkins-Bricolage-938';
    this._commitGIT = '15fef3c2a05f3f74ebeb823df5b152b21d250a75';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}