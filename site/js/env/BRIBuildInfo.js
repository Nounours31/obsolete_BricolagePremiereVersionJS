'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-02-02 20:00:05';
    this._versionBuild = 'jenkins-Bricolage-954';
    this._commitGIT = 'be4b3cceab9ed0968f7508c84b0a30446056341a';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}