'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-07-15 16:00:10';
    this._versionBuild = 'jenkins-Bricolage-1609';
    this._commitGIT = '88870110721a05a45422a6488504b915fa2d7abe';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}