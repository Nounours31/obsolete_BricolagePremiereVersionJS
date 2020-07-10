'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-07-10 08:00:08';
    this._versionBuild = 'jenkins-Bricolage-1587';
    this._commitGIT = '41e2800f7306ccb3e3cb17eed0675ac3c934deaf';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}