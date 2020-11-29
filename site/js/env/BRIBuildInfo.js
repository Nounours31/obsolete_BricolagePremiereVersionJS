'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-11-29 12:00:06';
    this._versionBuild = 'jenkins-Bricolage-2156';
    this._commitGIT = 'd5e667eb36dc0377ad3a4df6068e8e2f63b45b78';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}