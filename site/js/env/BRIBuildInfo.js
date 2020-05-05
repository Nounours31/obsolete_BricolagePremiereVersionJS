'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-05-05 20:00:08';
    this._versionBuild = 'jenkins-Bricolage-1326';
    this._commitGIT = '0c1f3d20ddcdf29793067a7dddc1078f90ffb1bd';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}