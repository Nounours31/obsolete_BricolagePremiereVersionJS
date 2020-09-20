'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-09-20 12:00:06';
    this._versionBuild = 'jenkins-Bricolage-1876';
    this._commitGIT = '7addfb67a389aaa40d4d70f24d5a9f1b22f091ef';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}