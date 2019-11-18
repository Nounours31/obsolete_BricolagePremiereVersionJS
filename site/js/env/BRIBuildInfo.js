'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-11-18 20:00:04';
    this._versionBuild = 'jenkins-Bricolage-650';
    this._commitGIT = 'ed5c37cc0b3ae287b8212f0bf41422065f8d0f39';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}