'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-09-19 08:00:05';
    this._versionBuild = 'jenkins-Bricolage-407';
    this._commitGIT = '3e8774e680289dcae57ae57d32ed6e33ba053a65';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}