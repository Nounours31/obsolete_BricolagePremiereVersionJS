'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-11-01 16:00:05';
    this._versionBuild = 'jenkins-Bricolage-581';
    this._commitGIT = '7360d723d7b23485a67adde9a6d4e8a905d36efb';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}