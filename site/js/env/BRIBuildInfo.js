'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-02-08 20:00:05';
    this._versionBuild = 'jenkins-Bricolage-978';
    this._commitGIT = 'baa40231e2d1f826962485d31d1301bb617a98a9';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}