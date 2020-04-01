'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-04-01 08:00:05';
    this._versionBuild = 'jenkins-Bricolage-1187';
    this._commitGIT = '431dd71b97c6293ac479e696ef23e10ad40806ba';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}