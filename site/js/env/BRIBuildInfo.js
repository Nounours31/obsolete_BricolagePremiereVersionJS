'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-08-25 12:00:05';
    this._versionBuild = 'jenkins-Bricolage-308';
    this._commitGIT = 'bd8d18f90aec28333aecbc1177ba2dc021a42c3f';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}