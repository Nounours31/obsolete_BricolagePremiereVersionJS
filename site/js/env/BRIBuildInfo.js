'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-10-27 16:00:08';
    this._versionBuild = 'jenkins-Bricolage-2025';
    this._commitGIT = '6cb3b15bdd82babf48bae4550e8e2bd38078b66c';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}