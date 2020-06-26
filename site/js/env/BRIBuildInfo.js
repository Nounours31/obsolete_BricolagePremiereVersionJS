'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-06-26 20:00:08';
    this._versionBuild = 'jenkins-Bricolage-1534';
    this._commitGIT = '3671832f80019699fa6eeeabee48c7641dc74535';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}