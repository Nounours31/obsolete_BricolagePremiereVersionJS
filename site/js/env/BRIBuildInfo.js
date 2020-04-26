'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-04-26 12:00:04';
    this._versionBuild = 'jenkins-Bricolage-1288';
    this._commitGIT = '39e0e9a227e09379ec3465e2f4c1b7996ff35df6';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}