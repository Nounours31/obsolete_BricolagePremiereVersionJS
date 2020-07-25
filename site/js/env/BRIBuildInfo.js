'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-07-25 20:00:07';
    this._versionBuild = 'jenkins-Bricolage-1650';
    this._commitGIT = '73c656ea8360e5b54ab98960295c871df0aff29a';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}