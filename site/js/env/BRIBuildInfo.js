'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-03-10 08:00:05';
    this._versionBuild = 'jenkins-Bricolage-1099';
    this._commitGIT = 'b17658afe112b8aca8ddd5111fb82b9bdde8a5d5';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}