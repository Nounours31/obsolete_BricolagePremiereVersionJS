'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-09-27 08:00:05';
    this._versionBuild = 'jenkins-Bricolage-439';
    this._commitGIT = '85a7dea40a7998289be370f762243438392c1e4b';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}