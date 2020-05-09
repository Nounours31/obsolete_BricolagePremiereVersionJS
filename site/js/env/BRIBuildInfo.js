'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-05-09 08:00:06';
    this._versionBuild = 'jenkins-Bricolage-1339';
    this._commitGIT = 'c837a215ab6acc61ba84e3357a539c5144844070';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}