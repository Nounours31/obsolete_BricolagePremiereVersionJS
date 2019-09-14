'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-09-14 12:00:05';
    this._versionBuild = 'jenkins-Bricolage-388';
    this._commitGIT = '3863cd015763dd91520ad75a049ab267ad737c01';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}