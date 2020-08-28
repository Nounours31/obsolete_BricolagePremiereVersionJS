'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-08-28 12:00:07';
    this._versionBuild = 'jenkins-Bricolage-1784';
    this._commitGIT = '8ed65a7b033ce9bb23ecfaff00919329e9fdd29c';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}