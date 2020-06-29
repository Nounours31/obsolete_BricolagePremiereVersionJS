'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-06-29 16:00:10';
    this._versionBuild = 'jenkins-Bricolage-1545';
    this._commitGIT = '6f6b9c78e34d1612ff9d37366c38cdf4c4fea5fb';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}