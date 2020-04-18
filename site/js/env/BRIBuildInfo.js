'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-04-18 20:00:05';
    this._versionBuild = 'jenkins-Bricolage-1258';
    this._commitGIT = '86df68695036cc7877a2b050a2af842b25cda647';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}