'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-08-20 08:00:05';
    this._versionBuild = 'jenkins-Bricolage-287';
    this._commitGIT = '2874f3480a8c27685be6baa92d50c639e50fa0d0';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}