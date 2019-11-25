'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-11-25 16:00:05';
    this._versionBuild = 'jenkins-Bricolage-677';
    this._commitGIT = '42c5b8d1ac35775b8eb72c2b7ea2c6f662f5f48c';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}