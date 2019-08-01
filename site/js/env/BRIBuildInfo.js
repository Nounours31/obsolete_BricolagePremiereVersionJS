'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-08-01 08:00:13';
    this._versionBuild = 'jenkins-Bricolage-211';
    this._commitGIT = '67b14791150a399e3f7be6e9fe887fb29fe49a28';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}