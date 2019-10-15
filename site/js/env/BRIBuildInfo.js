'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-10-15 08:00:04';
    this._versionBuild = 'jenkins-Bricolage-511';
    this._commitGIT = 'fb232bba2e07911f26c3c4c8953d40e2c92736c8';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}