'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-05-20 20:00:08';
    this._versionBuild = 'jenkins-Bricolage-1386';
    this._commitGIT = '1df54c2910876f68e759f8b737bc2113c417a9bb';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}