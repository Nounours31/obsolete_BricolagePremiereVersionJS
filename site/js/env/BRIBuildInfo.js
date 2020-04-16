'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-04-16 20:00:05';
    this._versionBuild = 'jenkins-Bricolage-1250';
    this._commitGIT = 'cee1ce203ce99992b6e93a8c996b449f3b765728';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}