'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-06-23 16:00:11';
    this._versionBuild = 'jenkins-Bricolage-1521';
    this._commitGIT = 'f7f0802bd56c992bcb827611f7c6a4f5e46c5fac';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}