'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-05-12 08:00:06';
    this._versionBuild = 'jenkins-Bricolage-1351';
    this._commitGIT = 'dfbd348a7b908d089bc8764320e3c0d92bb5fce2';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}