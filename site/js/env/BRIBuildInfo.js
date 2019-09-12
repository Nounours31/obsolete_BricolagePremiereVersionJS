'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-09-12 08:00:05';
    this._versionBuild = 'jenkins-Bricolage-379';
    this._commitGIT = 'f093c7c1f771a2afeb5622fda94ff85687436172';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}