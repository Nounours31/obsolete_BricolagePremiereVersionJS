'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-10-24 20:00:05';
    this._versionBuild = 'jenkins-Bricolage-550';
    this._commitGIT = '480f15c10cc28c6b2b774702c602a03b077ecdc2';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}