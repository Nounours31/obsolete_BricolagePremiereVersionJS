'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-10-25 16:00:06';
    this._versionBuild = 'jenkins-Bricolage-553';
    this._commitGIT = '24f215ab0358d09dc49404c8622456dec887b697';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}