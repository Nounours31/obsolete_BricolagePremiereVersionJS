'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-11-23 20:00:05';
    this._versionBuild = 'jenkins-Bricolage-670';
    this._commitGIT = '87b1be20e4efbc7465c02fe9d940a0a35bc5d85a';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}