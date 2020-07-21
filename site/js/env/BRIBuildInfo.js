'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-07-21 16:00:10';
    this._versionBuild = 'jenkins-Bricolage-1633';
    this._commitGIT = '345b3d9be6aaccd60632812d6bdb1d43765f5763';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}