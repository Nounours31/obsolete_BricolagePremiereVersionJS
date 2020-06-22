'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-06-22 16:00:10';
    this._versionBuild = 'jenkins-Bricolage-1517';
    this._commitGIT = 'd243c6e4d2079cbfbd901fa7917a661586635602';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}