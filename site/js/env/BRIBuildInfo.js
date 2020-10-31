'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-10-31 12:00:06';
    this._versionBuild = 'jenkins-Bricolage-2040';
    this._commitGIT = 'bc380a089e7edbd61afddee5fdc9d723773d780e';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}