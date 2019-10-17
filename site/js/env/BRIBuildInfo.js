'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-10-17 16:00:05';
    this._versionBuild = 'jenkins-Bricolage-521';
    this._commitGIT = '7f07d79cf8c964e4701cd43dfaa24a1e0d5b80e1';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}