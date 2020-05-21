'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-05-21 08:00:08';
    this._versionBuild = 'jenkins-Bricolage-1387';
    this._commitGIT = 'def317455742537f862e1346bd705e3a27bab442';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}