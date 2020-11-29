'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-11-29 08:00:06';
    this._versionBuild = 'jenkins-Bricolage-2155';
    this._commitGIT = '1945e32ea9d8a0de67ef670a685c5a81b701902b';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}