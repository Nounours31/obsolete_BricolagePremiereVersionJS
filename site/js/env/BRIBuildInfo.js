'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-07-12 13:05:53';
    this._versionBuild = 'jenkins-Bricolage-129';
    this._commitGIT = 'd8f55f6e3f351e20224f2b2f542afd25bbb7e69c';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}