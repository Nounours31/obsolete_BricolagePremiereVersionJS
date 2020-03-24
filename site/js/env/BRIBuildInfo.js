'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-03-24 16:00:05';
    this._versionBuild = 'jenkins-Bricolage-1157';
    this._commitGIT = '331c577a3a3214ed4e29c5b3a982618ddefab1a8';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}