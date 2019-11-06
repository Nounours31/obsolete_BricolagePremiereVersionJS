'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-11-06 16:00:05';
    this._versionBuild = 'jenkins-Bricolage-601';
    this._commitGIT = '3605a12c55f28e449462dc6590c0d0ce6d677774';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}