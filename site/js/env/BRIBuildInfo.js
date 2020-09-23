'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-09-23 12:00:06';
    this._versionBuild = 'jenkins-Bricolage-1888';
    this._commitGIT = 'ab84c3a3e47a0776b96e895d50e2ac606b59bfce';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}