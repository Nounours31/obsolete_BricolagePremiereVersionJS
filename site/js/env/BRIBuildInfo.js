'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-01-25 20:00:06';
    this._versionBuild = 'jenkins-Bricolage-922';
    this._commitGIT = 'af1ca43e4a1692e8d09649b3af0e186bf8b4179a';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}