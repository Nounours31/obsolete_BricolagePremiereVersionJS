'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-12-06 08:00:05';
    this._versionBuild = 'jenkins-Bricolage-2183';
    this._commitGIT = '0231fd2eba55d6b52a1e6133853599276beab64a';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}