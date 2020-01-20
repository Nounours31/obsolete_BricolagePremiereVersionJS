'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-01-20 12:00:07';
    this._versionBuild = 'jenkins-Bricolage-900';
    this._commitGIT = '1260f0bdd674c674078f1949075200dfed8b604a';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}