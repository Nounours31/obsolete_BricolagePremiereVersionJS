'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-09-14 16:00:06';
    this._versionBuild = 'jenkins-Bricolage-389';
    this._commitGIT = '7104b1e78789d465c073ea9a56bfe1a7eae4cc2a';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}