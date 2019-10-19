'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-10-19 20:00:05';
    this._versionBuild = 'jenkins-Bricolage-530';
    this._commitGIT = '1c0756408e1757325743ae74f5caaafe7c2430d0';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}