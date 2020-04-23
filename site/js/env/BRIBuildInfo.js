'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-04-23 20:00:07';
    this._versionBuild = 'jenkins-Bricolage-1278';
    this._commitGIT = 'd67257142929bd9a1ab8b6d13af54525c0e2fa2e';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}