'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-01-16 20:00:06';
    this._versionBuild = 'jenkins-Bricolage-886';
    this._commitGIT = '44ae80d6ce85e7815cc698edc66039d4a600a03c';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}