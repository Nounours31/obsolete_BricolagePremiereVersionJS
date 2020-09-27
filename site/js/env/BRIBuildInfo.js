'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-09-27 08:00:05';
    this._versionBuild = 'jenkins-Bricolage-1903';
    this._commitGIT = '19d51af4e4831e6eb6d6dcbdd8ba40928c074886';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}