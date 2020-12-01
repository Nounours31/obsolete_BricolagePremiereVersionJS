'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-12-01 12:00:07';
    this._versionBuild = 'jenkins-Bricolage-2164';
    this._commitGIT = '6415a9c6b69a878d002939c6dbe8e7630b3d2ce7';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}