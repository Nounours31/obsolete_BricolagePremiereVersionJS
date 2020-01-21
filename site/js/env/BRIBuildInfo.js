'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-01-21 12:00:06';
    this._versionBuild = 'jenkins-Bricolage-904';
    this._commitGIT = '69cec4eeaa6b159fe1efc9b2ba001164943a1ace';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}