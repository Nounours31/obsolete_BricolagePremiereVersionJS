'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-10-21 20:00:07';
    this._versionBuild = 'jenkins-Bricolage-2002';
    this._commitGIT = 'f4680268b789715adbe350d64613bfca0e7680c8';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}