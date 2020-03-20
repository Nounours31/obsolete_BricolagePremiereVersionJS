'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-03-20 08:00:05';
    this._versionBuild = 'jenkins-Bricolage-1139';
    this._commitGIT = '9fb533482f37136ee92df7652856d2d4d0849bc4';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}