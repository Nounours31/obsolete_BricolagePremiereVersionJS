'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-10-15 12:00:06';
    this._versionBuild = 'jenkins-Bricolage-512';
    this._commitGIT = 'ff1e6c915224632d301b2cf4520f2df09c740f87';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}