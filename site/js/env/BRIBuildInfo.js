'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-07-12 11:58:07';
    this._versionBuild = 'jenkins-Bricolage-113';
    this._commitGIT = 'b23cf9e4fb391839f9781ff6db1e512a7b798ac6';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}