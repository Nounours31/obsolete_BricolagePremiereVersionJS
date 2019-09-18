'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-09-18 12:00:04';
    this._versionBuild = 'jenkins-Bricolage-404';
    this._commitGIT = '644c3aee210196743df9af45c460ba0eda0e1a31';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}