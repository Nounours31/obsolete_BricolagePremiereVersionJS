'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-06-29 20:00:08';
    this._versionBuild = 'jenkins-Bricolage-1546';
    this._commitGIT = 'da67b3b65ea068b6502b63504b9534e43870e621';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}