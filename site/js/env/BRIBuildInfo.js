'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-12-24 08:00:05';
    this._versionBuild = 'jenkins-Bricolage-791';
    this._commitGIT = 'c580b8bd7fbef777f387186d4c3e7b6b8fb3ad0c';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}