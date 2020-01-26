'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-01-26 20:00:06';
    this._versionBuild = 'jenkins-Bricolage-926';
    this._commitGIT = 'ff32a83a8387a46026ae550fae8f4bca0e914ead';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}