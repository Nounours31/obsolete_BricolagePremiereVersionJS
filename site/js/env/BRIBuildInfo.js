'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-09-30 08:00:06';
    this._versionBuild = 'jenkins-Bricolage-1915';
    this._commitGIT = 'bb3f1de4b6630761bf0e85f9f01fd2adde93e98e';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}