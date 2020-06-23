'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-06-23 08:00:08';
    this._versionBuild = 'jenkins-Bricolage-1519';
    this._commitGIT = 'aaf22750fd3234ee781040d813d912d1939aa4e4';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}