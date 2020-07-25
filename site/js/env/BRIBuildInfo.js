'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-07-25 16:00:07';
    this._versionBuild = 'jenkins-Bricolage-1649';
    this._commitGIT = '6860b434a93c2fce5efa31dabff8c53aa05956f9';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}