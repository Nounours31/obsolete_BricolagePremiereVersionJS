'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-05-11 08:00:06';
    this._versionBuild = 'jenkins-Bricolage-1347';
    this._commitGIT = '646973f237ac76e3e1e9d8a1db2c2b60a9e4b0e7';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}