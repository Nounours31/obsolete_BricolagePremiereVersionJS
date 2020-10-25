'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-10-25 16:00:06';
    this._versionBuild = 'jenkins-Bricolage-2017';
    this._commitGIT = 'f3bbbf934426e711a63f875d7c5e38e8d49efc97';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}