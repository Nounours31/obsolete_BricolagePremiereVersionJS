'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-06-08 08:00:07';
    this._versionBuild = 'jenkins-Bricolage-1459';
    this._commitGIT = '5558f0fed4bc3d2cd2949c8dfd5bd3ca2143ea05';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}