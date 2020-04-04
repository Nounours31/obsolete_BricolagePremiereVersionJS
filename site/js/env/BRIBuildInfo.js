'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-04-04 12:00:04';
    this._versionBuild = 'jenkins-Bricolage-1200';
    this._commitGIT = '987e560168177b1133e6344e7e0f9198bb2dc2a0';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}