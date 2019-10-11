'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-10-11 08:00:05';
    this._versionBuild = 'jenkins-Bricolage-495';
    this._commitGIT = '8a8b12886004ddbc22f5bde5e88dd1c5f2c17008';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}