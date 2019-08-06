'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-08-06 12:00:14';
    this._versionBuild = 'jenkins-Bricolage-232';
    this._commitGIT = 'c44da1e2a41d84445ee977faf4268bb296a68314';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}