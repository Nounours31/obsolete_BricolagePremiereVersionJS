'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-02-28 16:00:06';
    this._versionBuild = 'jenkins-Bricolage-1057';
    this._commitGIT = 'd15f2a25a456b467d9a9520c0df74046b830d79b';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}