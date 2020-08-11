'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-08-11 20:00:08';
    this._versionBuild = 'jenkins-Bricolage-1718';
    this._commitGIT = '5893672e799027091289791546ae7f56121b4527';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}