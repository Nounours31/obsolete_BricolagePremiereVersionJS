'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-05-18 12:00:13';
    this._versionBuild = 'jenkins-Bricolage-1376';
    this._commitGIT = '1d268086553d49be2bcf1419d7a1bb2ca8a8af44';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}