'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-07-26 20:00:13';
    this._versionBuild = 'jenkins-Bricolage-190';
    this._commitGIT = '044a61300cf6f63d5559ad921321bbea916cc7d3';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}