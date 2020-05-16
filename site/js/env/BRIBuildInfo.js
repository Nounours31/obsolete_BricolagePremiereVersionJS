'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-05-16 08:00:06';
    this._versionBuild = 'jenkins-Bricolage-1367';
    this._commitGIT = 'a3418a1cc519838f5f23501c823aa85672f0f3c3';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}