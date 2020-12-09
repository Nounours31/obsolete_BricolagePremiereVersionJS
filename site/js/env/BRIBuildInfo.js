'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-12-09 12:00:08';
    this._versionBuild = 'jenkins-Bricolage-2196';
    this._commitGIT = 'a3519a5d15a8e1b2dc8fa2da12088e975fdf24b1';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}