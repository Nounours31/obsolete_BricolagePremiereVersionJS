'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-04-11 20:00:04';
    this._versionBuild = 'jenkins-Bricolage-1230';
    this._commitGIT = '3dbdc3a3dd5588c680f9f1d0936fb46b181a5548';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}