'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-05-27 08:00:06';
    this._versionBuild = 'jenkins-Bricolage-1411';
    this._commitGIT = '24d477344b1fa21e63dc130927e69a4264b74766';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}