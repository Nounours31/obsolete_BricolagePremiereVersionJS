'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-07-12 12:08:08';
    this._versionBuild = 'jenkins-Bricolage-115';
    this._commitGIT = 'e549868682e02ed9d7a5fe8254731ce9a4d1fcbe';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}