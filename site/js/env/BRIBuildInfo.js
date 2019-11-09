'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-11-09 16:00:05';
    this._versionBuild = 'jenkins-Bricolage-613';
    this._commitGIT = '21d1a41930cd00b6482bad0b63f2e7b55b19cb71';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}