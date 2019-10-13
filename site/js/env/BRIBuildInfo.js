'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-10-13 08:00:04';
    this._versionBuild = 'jenkins-Bricolage-503';
    this._commitGIT = 'daf5eea70a6ade70bd0e36aa14d34f5d4204c332';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}