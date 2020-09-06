'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-09-06 16:00:05';
    this._versionBuild = 'jenkins-Bricolage-1821';
    this._commitGIT = '48d2070410d5fe22451969b84fe9ff7b9569fb35';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}