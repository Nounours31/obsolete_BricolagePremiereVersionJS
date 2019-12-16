'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-12-16 08:00:06';
    this._versionBuild = 'jenkins-Bricolage-759';
    this._commitGIT = 'c73db41abe56d780ace62571d2962e238fee1a9b';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}