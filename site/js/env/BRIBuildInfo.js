'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-02-14 16:00:06';
    this._versionBuild = 'jenkins-Bricolage-1001';
    this._commitGIT = '150636ffe4c512b7e9714c9a1cbd20bffc08fd2c';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}