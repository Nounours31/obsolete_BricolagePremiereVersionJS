'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-03-24 08:00:05';
    this._versionBuild = 'jenkins-Bricolage-1155';
    this._commitGIT = 'f64a3946c25893f175b9ec20e1e2c20945396a27';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}