'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-08-14 08:00:15';
    this._versionBuild = 'jenkins-Bricolage-263';
    this._commitGIT = '004835895ee3ded18f7d8cac912c4c24fe5e66c0';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}