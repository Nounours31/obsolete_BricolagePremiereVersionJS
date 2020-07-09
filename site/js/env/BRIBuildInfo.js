'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-07-09 20:00:08';
    this._versionBuild = 'jenkins-Bricolage-1586';
    this._commitGIT = '9cc05faad6e1f682227fdcf25814d1395be77ec9';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}