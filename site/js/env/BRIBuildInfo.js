'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-11-30 20:00:05';
    this._versionBuild = 'jenkins-Bricolage-698';
    this._commitGIT = '15e2cfc03c509fabdf4ddd61b88c3e7c78250a09';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}