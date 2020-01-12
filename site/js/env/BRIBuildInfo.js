'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-01-12 20:00:04';
    this._versionBuild = 'jenkins-Bricolage-870';
    this._commitGIT = 'fda663ad1274053d1992b31f67513f95c5a5f6b3';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}