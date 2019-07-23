'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-07-23 08:00:12';
    this._versionBuild = 'jenkins-Bricolage-175';
    this._commitGIT = 'b4ecd0691a937f40c43db53d3c4695d7705c1fe8';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}