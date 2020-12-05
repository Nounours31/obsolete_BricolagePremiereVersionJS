'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-12-05 16:00:05';
    this._versionBuild = 'jenkins-Bricolage-2181';
    this._commitGIT = 'ebf61105e51e6801646b529ee115e916bf239d75';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}