'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-08-15 12:00:07';
    this._versionBuild = 'jenkins-Bricolage-1732';
    this._commitGIT = '4cb17427119e3272aaf05e4c94227adbc6d5299d';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}