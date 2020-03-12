'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-03-12 16:00:06';
    this._versionBuild = 'jenkins-Bricolage-1109';
    this._commitGIT = 'b327feefe4aa9b267da7b1970789835af9b54447';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}