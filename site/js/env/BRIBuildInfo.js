'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-10-29 20:00:05';
    this._versionBuild = 'jenkins-Bricolage-570';
    this._commitGIT = '9ceda81d37f0bf71b41b1522085fe61a1f074e7e';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}