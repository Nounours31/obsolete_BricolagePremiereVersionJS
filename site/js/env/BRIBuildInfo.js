'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-08-09 12:00:08';
    this._versionBuild = 'jenkins-Bricolage-1708';
    this._commitGIT = 'ac6dbdc85467e248b1c91c65da942ed42192be41';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}