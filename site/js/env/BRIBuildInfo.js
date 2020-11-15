'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-11-15 12:00:06';
    this._versionBuild = 'jenkins-Bricolage-2100';
    this._commitGIT = 'bab85f75dee77161b66da4ce81b6a7bd2cb47e02';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}