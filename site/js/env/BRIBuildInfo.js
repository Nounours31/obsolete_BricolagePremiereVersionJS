'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-11-29 08:00:06';
    this._versionBuild = 'jenkins-Bricolage-691';
    this._commitGIT = '0f3c4cee843d677375dae8bf7d0553269c77adee';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}