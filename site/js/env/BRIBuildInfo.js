'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-04-27 20:00:08';
    this._versionBuild = 'jenkins-Bricolage-1294';
    this._commitGIT = '562652b71d19f7274c94866a7b27e4741fd51da3';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}