'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-06-14 12:00:07';
    this._versionBuild = 'jenkins-Bricolage-1484';
    this._commitGIT = '9c46ac0238dd83c9e794d203ce78bb2612b90d1b';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}