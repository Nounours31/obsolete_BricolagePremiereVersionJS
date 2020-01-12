'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-01-12 08:00:04';
    this._versionBuild = 'jenkins-Bricolage-867';
    this._commitGIT = 'facbf7b08bb833267dbf47cc1e5225589edeb11d';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}