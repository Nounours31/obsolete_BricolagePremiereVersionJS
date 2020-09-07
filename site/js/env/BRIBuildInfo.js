'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-09-07 12:00:06';
    this._versionBuild = 'jenkins-Bricolage-1824';
    this._commitGIT = '808b6f4fc864131a1dfb64819db6e1faea04de00';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}