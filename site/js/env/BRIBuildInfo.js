'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-09-11 08:00:05';
    this._versionBuild = 'jenkins-Bricolage-375';
    this._commitGIT = '97b2d1896562a6df77619deda6a29e824dc80584';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}