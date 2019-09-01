'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-09-01 16:00:04';
    this._versionBuild = 'jenkins-Bricolage-337';
    this._commitGIT = '051e3136d2969da7a50bf3750a54cebb29acd992';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}