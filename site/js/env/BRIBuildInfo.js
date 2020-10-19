'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-10-19 16:00:07';
    this._versionBuild = 'jenkins-Bricolage-1993';
    this._commitGIT = '315cbfe4bbde7d22a57a61abf5de1940f0cda54e';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}