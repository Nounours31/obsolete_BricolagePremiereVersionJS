'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-06-18 20:00:10';
    this._versionBuild = 'jenkins-Bricolage-1502';
    this._commitGIT = '7334c4c0e469f8fe9b5f43ce27b37f16cf63b2e6';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}