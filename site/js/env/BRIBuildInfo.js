'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-01-21 08:00:06';
    this._versionBuild = 'jenkins-Bricolage-903';
    this._commitGIT = 'd75f71aa0d79ccaf3a42a8f3b14efede6b317fdb';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}