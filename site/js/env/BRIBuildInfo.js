'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-09-01 16:00:07';
    this._versionBuild = 'jenkins-Bricolage-1801';
    this._commitGIT = 'fc7e76197776a15e51a478ffe694bf6384ca59f5';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}