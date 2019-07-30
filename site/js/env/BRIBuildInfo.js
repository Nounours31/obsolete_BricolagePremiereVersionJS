'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-07-30 20:00:15';
    this._versionBuild = 'jenkins-Bricolage-206';
    this._commitGIT = '96958de326133b8e268221c1e825bc5a1a01702d';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}