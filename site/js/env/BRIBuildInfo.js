'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-08-19 12:00:11';
    this._versionBuild = 'jenkins-Bricolage-1748';
    this._commitGIT = 'aea1fb983b5c54d0ba22831573783caa4067b37e';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}