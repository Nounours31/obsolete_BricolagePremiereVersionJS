'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-09-08 12:00:05';
    this._versionBuild = 'jenkins-Bricolage-364';
    this._commitGIT = '9c174f29b6baec8be7fa54e0eea8d4a3770f5d0b';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}