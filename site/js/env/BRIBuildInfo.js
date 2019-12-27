'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-12-27 20:00:05';
    this._versionBuild = 'jenkins-Bricolage-806';
    this._commitGIT = '73d0c920c01702d71dac59097e561a627f0f811a';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}