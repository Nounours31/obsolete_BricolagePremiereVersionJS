'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-06-19 16:00:10';
    this._versionBuild = 'jenkins-Bricolage-1505';
    this._commitGIT = 'cc8eb61f90abdab76bb6f5b5f211d9a26cffaec1';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}