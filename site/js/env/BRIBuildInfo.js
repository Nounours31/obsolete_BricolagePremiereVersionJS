'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-08-22 12:00:07';
    this._versionBuild = 'jenkins-Bricolage-1760';
    this._commitGIT = '5141d1c7e1187b9153a4b8ab98d13ac76178575d';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}