'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-09-22 12:00:07';
    this._versionBuild = 'jenkins-Bricolage-1884';
    this._commitGIT = '0818b286e98fc5ed421cb59e26709690ed2baa06';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}