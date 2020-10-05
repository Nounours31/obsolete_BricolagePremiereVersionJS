'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-10-05 20:00:05';
    this._versionBuild = 'jenkins-Bricolage-1938';
    this._commitGIT = '2f91fecb25f7483a8f3434a394e1f3fc23081bea';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}