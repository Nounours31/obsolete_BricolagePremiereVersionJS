'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-08-25 16:00:07';
    this._versionBuild = 'jenkins-Bricolage-1773';
    this._commitGIT = '221125cbadba6cb393be5ad6d1314c74b2f884c9';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}