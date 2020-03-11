'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-03-11 08:00:05';
    this._versionBuild = 'jenkins-Bricolage-1103';
    this._commitGIT = '09e9277213e85c16c79d03360e5975f8527e3b3f';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}