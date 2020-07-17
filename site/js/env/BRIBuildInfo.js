'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-07-17 16:00:11';
    this._versionBuild = 'jenkins-Bricolage-1617';
    this._commitGIT = '9f270ab39e7e6700739d563e3af93c10871bee0d';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}