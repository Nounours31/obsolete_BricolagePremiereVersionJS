'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-11-04 08:00:05';
    this._versionBuild = 'jenkins-Bricolage-591';
    this._commitGIT = '052156b2ca0d7b1dfdd0946afa58da650a475720';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}