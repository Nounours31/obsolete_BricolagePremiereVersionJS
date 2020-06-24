'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-06-24 08:00:08';
    this._versionBuild = 'jenkins-Bricolage-1523';
    this._commitGIT = 'f8bc529697e6288152e12be85226047feb893c3c';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}