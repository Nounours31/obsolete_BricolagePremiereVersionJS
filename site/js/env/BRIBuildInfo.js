'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-04-14 16:00:05';
    this._versionBuild = 'jenkins-Bricolage-1241';
    this._commitGIT = 'c3f76d5dcfad07e3bfd9e6c19fabec218cb2f80a';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}