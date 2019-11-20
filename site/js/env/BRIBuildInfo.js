'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-11-20 12:00:06';
    this._versionBuild = 'jenkins-Bricolage-656';
    this._commitGIT = 'ffa0cf0ed82870ed229aedc95232eda5bd281421';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}