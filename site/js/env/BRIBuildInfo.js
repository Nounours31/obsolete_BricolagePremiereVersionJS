'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-08-01 16:00:07';
    this._versionBuild = 'jenkins-Bricolage-1677';
    this._commitGIT = '2540df0d6079202a0d1214c630e9a3424bfb2aeb';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}