'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-08-31 20:00:07';
    this._versionBuild = 'jenkins-Bricolage-1798';
    this._commitGIT = '7cc14b2272ba402b8f133f8d1955587e8e321117';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}