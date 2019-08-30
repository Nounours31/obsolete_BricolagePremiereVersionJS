'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-08-30 08:00:05';
    this._versionBuild = 'jenkins-Bricolage-327';
    this._commitGIT = '59e8d4ac4591f4c28a4024df1bbbc37b899c6cd0';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}