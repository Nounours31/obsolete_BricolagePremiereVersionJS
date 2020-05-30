'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-05-30 08:00:07';
    this._versionBuild = 'jenkins-Bricolage-1423';
    this._commitGIT = 'cb5c3fd99cadad8c84dda58bb410cf6e934686f0';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}