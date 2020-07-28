'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-07-28 16:00:10';
    this._versionBuild = 'jenkins-Bricolage-1661';
    this._commitGIT = '8fbae09a3986f3158be82b688509867e8705c6bb';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}