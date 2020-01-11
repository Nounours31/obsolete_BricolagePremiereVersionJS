'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-01-11 08:00:05';
    this._versionBuild = 'jenkins-Bricolage-863';
    this._commitGIT = 'f122aec40136e53b4e3d69df48d5dfab0e7a6ad7';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}