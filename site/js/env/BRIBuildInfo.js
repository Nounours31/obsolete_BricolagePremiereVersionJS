'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-10-21 16:00:08';
    this._versionBuild = 'jenkins-Bricolage-2001';
    this._commitGIT = '13d7f778020b9e4b5ad8afa877a7608108205a24';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}