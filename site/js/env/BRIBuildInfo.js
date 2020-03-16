'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-03-16 08:00:06';
    this._versionBuild = 'jenkins-Bricolage-1123';
    this._commitGIT = '32e51b051bbe5856b0dfa4ee5f449d74ce3b6ad5';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}