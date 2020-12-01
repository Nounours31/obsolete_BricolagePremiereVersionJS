'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-12-01 20:00:07';
    this._versionBuild = 'jenkins-Bricolage-2166';
    this._commitGIT = 'a570e384c2bb5163fcbd1845c7617002e6ce243d';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}