'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-01-27 16:00:06';
    this._versionBuild = 'jenkins-Bricolage-929';
    this._commitGIT = '1c4188d67af5c4551ea3571a2a184f9436b3946b';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}