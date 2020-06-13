'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-06-13 20:00:07';
    this._versionBuild = 'jenkins-Bricolage-1482';
    this._commitGIT = '76b4957dbff57a2d3ba95fd6ad2c62c352356034';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}