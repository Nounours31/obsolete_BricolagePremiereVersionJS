'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-07-15 12:00:14';
    this._versionBuild = 'jenkins-Bricolage-144';
    this._commitGIT = 'f6487ae3cb0be5b2511340ddea724c814d26cd7d';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}