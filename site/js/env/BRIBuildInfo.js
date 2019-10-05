'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-10-05 16:00:04';
    this._versionBuild = 'jenkins-Bricolage-473';
    this._commitGIT = '34aa8e91dd7a68d0e977848dd0763ba985416507';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}