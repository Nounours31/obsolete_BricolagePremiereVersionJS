'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-10-02 08:00:05';
    this._versionBuild = 'jenkins-Bricolage-459';
    this._commitGIT = '696e0ff83ac9509692a396c25029e2360c25f9d6';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}