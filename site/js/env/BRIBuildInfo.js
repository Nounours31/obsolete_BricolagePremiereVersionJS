'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-02-13 08:00:06';
    this._versionBuild = 'jenkins-Bricolage-995';
    this._commitGIT = '2e935b09b3417d3faba579f5bb96f4d634208365';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}