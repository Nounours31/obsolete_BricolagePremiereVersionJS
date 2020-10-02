'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-10-02 20:00:06';
    this._versionBuild = 'jenkins-Bricolage-1926';
    this._commitGIT = '3a571017f0103f61d9dea9f9b00158c8da6778b5';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}