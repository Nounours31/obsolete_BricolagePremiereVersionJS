'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-09-05 16:00:05';
    this._versionBuild = 'jenkins-Bricolage-1817';
    this._commitGIT = 'e63ca08d8eb213a56257135ddbbd13c3e52ad61b';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}