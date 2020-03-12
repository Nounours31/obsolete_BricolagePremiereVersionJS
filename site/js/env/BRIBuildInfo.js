'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-03-12 20:00:05';
    this._versionBuild = 'jenkins-Bricolage-1110';
    this._commitGIT = '76c662b1e9626e03de6af3c475dda46b8acf41b3';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}