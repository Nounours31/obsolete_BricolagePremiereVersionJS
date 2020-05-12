'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-05-12 16:00:08';
    this._versionBuild = 'jenkins-Bricolage-1353';
    this._commitGIT = 'f40053fcfdbe457d7457c51926d0d047a31c13ee';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}