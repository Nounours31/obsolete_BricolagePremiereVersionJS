'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-08-17 08:00:09';
    this._versionBuild = 'jenkins-Bricolage-1739';
    this._commitGIT = 'd3bc1f86bb58b041f8dcf26b6bb107c6d9e4174d';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}