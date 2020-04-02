'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-04-02 12:00:05';
    this._versionBuild = 'jenkins-Bricolage-1192';
    this._commitGIT = '348e9f18df9b8ed51a77545a4d5663ac4d1214dc';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}