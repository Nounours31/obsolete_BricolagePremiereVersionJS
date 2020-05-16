'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-05-16 12:00:06';
    this._versionBuild = 'jenkins-Bricolage-1368';
    this._commitGIT = '495c450fc7b09f522ed41beec2800058fe045199';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}