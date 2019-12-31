'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-12-31 08:00:04';
    this._versionBuild = 'jenkins-Bricolage-819';
    this._commitGIT = '3befd1f2d9829bdcda24e0920beaa390b79ad29c';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}