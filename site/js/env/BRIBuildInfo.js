'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-04-09 20:00:05';
    this._versionBuild = 'jenkins-Bricolage-1222';
    this._commitGIT = '3d4ca2f5d788fc4941ab3b0d1fd838debe1ffa59';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}