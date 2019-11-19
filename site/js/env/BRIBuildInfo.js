'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-11-19 08:00:05';
    this._versionBuild = 'jenkins-Bricolage-651';
    this._commitGIT = '84018c4f0c772e2bccdc3b48895c9e9dfd1d4922';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}