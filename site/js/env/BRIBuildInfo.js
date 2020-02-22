'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-02-22 20:00:05';
    this._versionBuild = 'jenkins-Bricolage-1034';
    this._commitGIT = '4e3f446e93c7cebf5261ebe1a24a797d90a0dede';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}