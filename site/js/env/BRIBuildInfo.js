'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-05-23 20:00:06';
    this._versionBuild = 'jenkins-Bricolage-1398';
    this._commitGIT = 'c4f14b0a06eb12e5af9e941b65162b59b6039bee';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}