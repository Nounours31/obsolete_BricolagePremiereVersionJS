'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-09-07 16:00:05';
    this._versionBuild = 'jenkins-Bricolage-361';
    this._commitGIT = '8a9bc6debf55ffff436ac3c08d930e66b0752ab9';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}