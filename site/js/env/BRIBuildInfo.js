'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-08-19 16:00:07';
    this._versionBuild = 'jenkins-Bricolage-1749';
    this._commitGIT = 'dc588ed35b5232ec736b729e3d0c99464a015b9c';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}