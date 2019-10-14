'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-10-14 08:00:05';
    this._versionBuild = 'jenkins-Bricolage-507';
    this._commitGIT = '9d6ba873ffc4f27e6d7a261e56bd95320a9b4333';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}