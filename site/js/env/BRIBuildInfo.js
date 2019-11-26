'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-11-26 12:00:05';
    this._versionBuild = 'jenkins-Bricolage-680';
    this._commitGIT = '7b50fe712f5df32121d4bc855c64bc031e9906f2';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}