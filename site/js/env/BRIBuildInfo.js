'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-02-07 12:00:06';
    this._versionBuild = 'jenkins-Bricolage-972';
    this._commitGIT = '8b090f6dda0851bc67242f093bb9d88eee2bfb83';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}