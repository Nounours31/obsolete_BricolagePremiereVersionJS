'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-03-17 16:00:05';
    this._versionBuild = 'jenkins-Bricolage-1129';
    this._commitGIT = '6c53c279498cce8801cada3027d59c40fe6ebab1';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}