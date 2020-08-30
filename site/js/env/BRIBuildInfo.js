'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-08-30 16:00:05';
    this._versionBuild = 'jenkins-Bricolage-1793';
    this._commitGIT = '49b446c0ac744216f0f3c86882a8f4b26f2b1e3a';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}