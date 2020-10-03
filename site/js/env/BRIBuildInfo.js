'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-10-03 12:00:06';
    this._versionBuild = 'jenkins-Bricolage-1928';
    this._commitGIT = 'bd0bf5e91f3a64bc42892e5991c5bc60a32b2cea';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}