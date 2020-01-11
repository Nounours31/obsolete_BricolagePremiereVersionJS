'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-01-11 20:00:04';
    this._versionBuild = 'jenkins-Bricolage-866';
    this._commitGIT = 'ac1d8a38deffa5be4e377fe3ea7912669e85c144';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}