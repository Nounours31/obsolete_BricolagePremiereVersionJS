'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-12-01 16:00:04';
    this._versionBuild = 'jenkins-Bricolage-701';
    this._commitGIT = 'bd5074be1805f7f8e9b765cd4b7d5906a07615df';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}