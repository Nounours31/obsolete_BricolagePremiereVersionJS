'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-05-19 16:00:06';
    this._versionBuild = 'jenkins-Bricolage-1381';
    this._commitGIT = '437d47e3680c2579ac1f3e0b876380fb8893c3f2';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}