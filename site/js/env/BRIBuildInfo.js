'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-06-15 12:00:09';
    this._versionBuild = 'jenkins-Bricolage-1488';
    this._commitGIT = 'e602e45505aad06918dde9a21f137e2d4030db5d';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}