'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-07-14 16:00:09';
    this._versionBuild = 'jenkins-Bricolage-141';
    this._commitGIT = 'de21580543e04c31b6f84b8100b2ffb39b6d7e13';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}