'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-10-13 12:00:05';
    this._versionBuild = 'jenkins-Bricolage-504';
    this._commitGIT = 'a9d05d90751d972f3b8c9ec86dabd14be21b1526';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}