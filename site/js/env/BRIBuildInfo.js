'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-08-11 16:00:10';
    this._versionBuild = 'jenkins-Bricolage-1717';
    this._commitGIT = 'f227381fc14bb8d97c88b12a562884caeb362383';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}