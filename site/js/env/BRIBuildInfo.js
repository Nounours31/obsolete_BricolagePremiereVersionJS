'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-12-08 08:00:04';
    this._versionBuild = 'jenkins-Bricolage-727';
    this._commitGIT = '15529572f757e03be152449a4abacc3e4bfc917d';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}