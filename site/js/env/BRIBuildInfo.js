'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-10-26 12:00:07';
    this._versionBuild = 'jenkins-Bricolage-556';
    this._commitGIT = 'dfe818c2b6f6db0377e0e9c9eb7ab87b633da891';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}