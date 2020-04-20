'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-04-20 16:00:06';
    this._versionBuild = 'jenkins-Bricolage-1265';
    this._commitGIT = '4216bfae580776b36866ab1d47f85594372ef58d';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}