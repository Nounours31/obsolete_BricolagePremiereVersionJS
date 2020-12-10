'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-12-10 08:00:07';
    this._versionBuild = 'jenkins-Bricolage-2199';
    this._commitGIT = 'cf9360072dbfe695efbe8184ddccbdc8d91dc274';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}