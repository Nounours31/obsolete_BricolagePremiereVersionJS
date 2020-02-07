'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-02-07 20:00:06';
    this._versionBuild = 'jenkins-Bricolage-974';
    this._commitGIT = 'cbdfd39f7bd149f3a6aca700579f03d105e9441c';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}