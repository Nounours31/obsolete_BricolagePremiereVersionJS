'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-12-30 12:00:05';
    this._versionBuild = 'jenkins-Bricolage-816';
    this._commitGIT = 'c91ed442a0e1ad1d2f65dafefa0f96b9fdd9d470';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}