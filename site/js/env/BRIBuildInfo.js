'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-12-26 12:00:05';
    this._versionBuild = 'jenkins-Bricolage-800';
    this._commitGIT = '7af3ba1da07a5d5c7cadf42f3f1d617ebdc248c7';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}