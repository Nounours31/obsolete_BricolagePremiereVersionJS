'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-06-07 08:00:06';
    this._versionBuild = 'jenkins-Bricolage-1455';
    this._commitGIT = 'c96163782d9964a86a135cb4bd9af76f2f6a8674';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}