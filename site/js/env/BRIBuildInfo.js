'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-09-19 20:00:06';
    this._versionBuild = 'jenkins-Bricolage-410';
    this._commitGIT = '9d45fe80f3a129d79d737c9797164c83cc6f9df8';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}