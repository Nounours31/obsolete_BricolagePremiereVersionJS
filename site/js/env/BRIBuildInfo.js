'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-03-30 12:00:07';
    this._versionBuild = 'jenkins-Bricolage-1180';
    this._commitGIT = 'e9fbff3651e4f1ba734326ca9686858ef6e1f08d';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}