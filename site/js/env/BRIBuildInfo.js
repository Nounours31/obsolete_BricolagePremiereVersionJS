'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-08-24 08:00:08';
    this._versionBuild = 'jenkins-Bricolage-1767';
    this._commitGIT = 'a763c82b841edb2aa59ae588d72d670b6784cfc9';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}