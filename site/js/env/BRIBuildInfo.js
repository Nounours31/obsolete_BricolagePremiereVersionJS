'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-07-12 12:03:06';
    this._versionBuild = 'jenkins-Bricolage-114';
    this._commitGIT = 'af94d60dfa476b4b2f2f46c88b92d15f3f8d5676';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}