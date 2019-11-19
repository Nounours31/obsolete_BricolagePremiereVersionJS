'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-11-19 20:00:07';
    this._versionBuild = 'jenkins-Bricolage-654';
    this._commitGIT = '04e55041cd0c7153387ff11f459d96f4e1d3b570';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}