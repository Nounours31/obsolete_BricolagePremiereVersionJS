'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-11-01 08:00:06';
    this._versionBuild = 'jenkins-Bricolage-2043';
    this._commitGIT = 'e2239250715de0b3d0497360b03432abd944c60e';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}