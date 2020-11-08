'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-11-08 08:00:07';
    this._versionBuild = 'jenkins-Bricolage-2071';
    this._commitGIT = '30853fb69db07489187b1ac6f28c10a2759a0a7b';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}