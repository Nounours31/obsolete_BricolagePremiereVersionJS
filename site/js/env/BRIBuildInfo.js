'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-09-06 08:00:05';
    this._versionBuild = 'jenkins-Bricolage-355';
    this._commitGIT = '9a09cc4fe04bec8909a75610d3bb00591a193256';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}