'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-03-28 20:00:05';
    this._versionBuild = 'jenkins-Bricolage-1174';
    this._commitGIT = '4af1bc4c3b0b384b7fcde53bebfb5e16ea872813';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}