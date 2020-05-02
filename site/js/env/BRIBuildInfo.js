'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-05-02 12:00:06';
    this._versionBuild = 'jenkins-Bricolage-1312';
    this._commitGIT = 'd95c303d9b86d6c8990db46db96f825a8987413f';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}