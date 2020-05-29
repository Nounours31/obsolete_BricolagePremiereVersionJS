'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-05-29 20:00:08';
    this._versionBuild = 'jenkins-Bricolage-1422';
    this._commitGIT = '7723b226e904d665de0451d8b3655d101696735d';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}