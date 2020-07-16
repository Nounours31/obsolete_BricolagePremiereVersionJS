'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-07-16 08:00:08';
    this._versionBuild = 'jenkins-Bricolage-1611';
    this._commitGIT = '6a2734e1bf64104cdcd8c16a24f3b83fa7308f53';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}