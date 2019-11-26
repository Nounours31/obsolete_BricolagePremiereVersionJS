'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-11-26 20:00:05';
    this._versionBuild = 'jenkins-Bricolage-682';
    this._commitGIT = '3c8b975d9c6d0e45f0a35699997c9b7b283976f2';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}