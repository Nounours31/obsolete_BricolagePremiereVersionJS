'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-01-25 16:00:06';
    this._versionBuild = 'jenkins-Bricolage-921';
    this._commitGIT = '599f30f488bdc2a9022b67b67b5607f54ee7eb5a';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}