'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-07-11 12:00:07';
    this._versionBuild = 'jenkins-Bricolage-1592';
    this._commitGIT = 'be1c5579c0c5c5d85a276d078ff94e20d6645611';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}