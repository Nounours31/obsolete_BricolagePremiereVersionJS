'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-11-06 12:00:05';
    this._versionBuild = 'jenkins-Bricolage-600';
    this._commitGIT = 'f4714cef6ab557612ea1ac20235ecc27f0f2dfe3';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}