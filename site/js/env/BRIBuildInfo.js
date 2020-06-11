'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-06-11 16:00:10';
    this._versionBuild = 'jenkins-Bricolage-1473';
    this._commitGIT = '32802f4817c6e61d979756ac33a5b8dc134646b5';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}