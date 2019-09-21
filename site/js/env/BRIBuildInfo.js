'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-09-21 20:00:05';
    this._versionBuild = 'jenkins-Bricolage-418';
    this._commitGIT = '6460ae1bcb261cdeb4aa7e50b037b234bb4510cd';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}