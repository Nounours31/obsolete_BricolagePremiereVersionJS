'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-09-22 20:00:06';
    this._versionBuild = 'jenkins-Bricolage-1886';
    this._commitGIT = '8903c031f91aa8321c89afbd7975405666e7bac5';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}