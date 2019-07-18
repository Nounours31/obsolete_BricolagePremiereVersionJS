'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-07-18 16:00:16';
    this._versionBuild = 'jenkins-Bricolage-157';
    this._commitGIT = '96a72a19e8f86157ddfc8172e1202fd98bf30caf';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}