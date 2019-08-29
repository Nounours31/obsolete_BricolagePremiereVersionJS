'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-08-29 08:00:04';
    this._versionBuild = 'jenkins-Bricolage-323';
    this._commitGIT = 'def8d0a1c137d9a0cffa0ba8fce7996e81ac61d5';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}