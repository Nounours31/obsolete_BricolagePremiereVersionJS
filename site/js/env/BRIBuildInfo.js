'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-03-30 08:00:04';
    this._versionBuild = 'jenkins-Bricolage-1179';
    this._commitGIT = '0013a6f078d501e321c5bc5a64ff6356cf1cbda8';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}