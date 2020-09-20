'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-09-20 16:00:05';
    this._versionBuild = 'jenkins-Bricolage-1877';
    this._commitGIT = 'c55c702f2befd3db4355c4152a5efd63ca8dbb59';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}