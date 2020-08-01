'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-08-01 20:00:07';
    this._versionBuild = 'jenkins-Bricolage-1678';
    this._commitGIT = '02b63e389a2a6cde5bf0e60351e1f6206402f9b7';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}