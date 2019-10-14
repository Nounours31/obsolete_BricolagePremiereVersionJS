'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-10-14 16:00:05';
    this._versionBuild = 'jenkins-Bricolage-509';
    this._commitGIT = '9606ed603b77138b47f7a685e8488c9cd03e4e96';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}