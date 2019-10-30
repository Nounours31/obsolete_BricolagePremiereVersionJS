'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-10-30 12:00:06';
    this._versionBuild = 'jenkins-Bricolage-572';
    this._commitGIT = 'cba2d577d4a9dad7e15893d1ad9b95bad02715e7';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}