'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-04-27 16:00:05';
    this._versionBuild = 'jenkins-Bricolage-1293';
    this._commitGIT = '8440fa0611abb5512feab7839e4523d7762f7d49';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}