'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-09-03 12:00:08';
    this._versionBuild = 'jenkins-Bricolage-1808';
    this._commitGIT = 'b0201f59e42af0ef3fd933ac0c7cc93341509435';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}