'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-01-22 12:00:08';
    this._versionBuild = 'jenkins-Bricolage-908';
    this._commitGIT = 'd7c0a887f4c6f3f962fb50c1f9000ccb59fc3d94';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}