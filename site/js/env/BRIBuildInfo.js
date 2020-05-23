'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-05-23 12:00:06';
    this._versionBuild = 'jenkins-Bricolage-1396';
    this._commitGIT = '6b478f1bdcba1e042dd451f007ba4282c1b582ec';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}