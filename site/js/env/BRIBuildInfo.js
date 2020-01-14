'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-01-14 20:00:07';
    this._versionBuild = 'jenkins-Bricolage-878';
    this._commitGIT = 'a293097706bbc7eccf1db0deb16d9b104b6ce7a5';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}