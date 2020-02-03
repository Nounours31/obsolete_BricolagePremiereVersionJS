'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-02-03 12:00:06';
    this._versionBuild = 'jenkins-Bricolage-956';
    this._commitGIT = '38ece6cf1a38fa6a42b75c2482f321ed02f9b7e1';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}