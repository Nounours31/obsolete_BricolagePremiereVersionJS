'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-09-11 12:00:04';
    this._versionBuild = 'jenkins-Bricolage-376';
    this._commitGIT = 'cec78c57deb5317efd136fc5c0f82127e7351200';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}