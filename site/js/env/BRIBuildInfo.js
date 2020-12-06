'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-12-06 20:00:06';
    this._versionBuild = 'jenkins-Bricolage-2186';
    this._commitGIT = 'a6f005464db47eaba3ed4f4462024d9ba203cd83';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}