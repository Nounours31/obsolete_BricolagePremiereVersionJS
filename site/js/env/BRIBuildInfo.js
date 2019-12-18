'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-12-18 16:00:05';
    this._versionBuild = 'jenkins-Bricolage-769';
    this._commitGIT = '80bd95a212e125eaa5939218063fd1a16e5fcea8';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}