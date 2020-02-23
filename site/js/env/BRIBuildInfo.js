'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-02-23 16:00:05';
    this._versionBuild = 'jenkins-Bricolage-1037';
    this._commitGIT = 'aa739f8edbfdac6f292fac429d2b3e8ab66556f4';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}