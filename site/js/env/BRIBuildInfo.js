'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-06-24 12:00:09';
    this._versionBuild = 'jenkins-Bricolage-1524';
    this._commitGIT = '20b2d15a0a51d4ae92b27ec419fe0a32436fe09c';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}