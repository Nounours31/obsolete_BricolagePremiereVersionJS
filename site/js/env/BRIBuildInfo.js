'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-09-26 16:00:04';
    this._versionBuild = 'jenkins-Bricolage-437';
    this._commitGIT = '827a713019ee484eb74a0b75a4109594481bb950';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}