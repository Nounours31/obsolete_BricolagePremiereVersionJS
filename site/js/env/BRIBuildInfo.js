'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-04-13 20:00:05';
    this._versionBuild = 'jenkins-Bricolage-1238';
    this._commitGIT = '24481c5b5d62c3d8fd5ded5443bd47eef330e0d9';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}