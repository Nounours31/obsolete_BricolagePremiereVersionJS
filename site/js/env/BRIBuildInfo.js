'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-10-07 20:00:06';
    this._versionBuild = 'jenkins-Bricolage-1946';
    this._commitGIT = '5ae8804e5ed2a7f5dcf3ebca999f2136226984c3';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}