'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-10-29 20:00:07';
    this._versionBuild = 'jenkins-Bricolage-2034';
    this._commitGIT = '242f29e0b761427b238695d7d6c58d7a8da0b4cc';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}