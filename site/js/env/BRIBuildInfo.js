'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-09-27 20:00:06';
    this._versionBuild = 'jenkins-Bricolage-1906';
    this._commitGIT = '363423f0de23dbef258d08d7faea9b158c924eaa';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}