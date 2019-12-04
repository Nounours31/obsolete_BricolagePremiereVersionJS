'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-12-04 12:00:05';
    this._versionBuild = 'jenkins-Bricolage-712';
    this._commitGIT = 'f4a6fe1b9806ef75c40cc7329efdf60c96a470a5';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}